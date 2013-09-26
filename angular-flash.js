angular.module('flash', [])
.factory('flash', function($rootScope, $timeout) {
  var messages = [];

  var reset;
  var cleanup = function() {
    $timeout.cancel(reset);
    reset = $timeout(function() { messages = []; });
  };

  var emit = function() {
    $rootScope.$emit('flash:message', messages, cleanup);
  };

  $rootScope.$on('$routeChangeSuccess', emit);

  var asMessage = function(level, text) {
    if (!text) {
      text = level;
      level = 'success';
    }
    return { level: level, text: text };
  };

  var asArrayOfMessages = function(level, text) {
    if (level instanceof Array) return level.map(function(message) {
      return message.text ? message : asMessage(message);
    }); 
    return text ? [{ level: level, text: text }] : [asMessage(level)];
  };
  
  return function(level, text, timeout) {
    $timeout(function() { emit(cleanup); }, timeout);
    emit(messages = asArrayOfMessages(level, text));
  };
})

.directive('flashMessages', function() {
  var directive = { restrict: 'E', replace: true };
  directive.template =
    '<ol id="flash-messages">' +
      '<li ng-repeat="m in messages" class="{{m.level}}" ng-bind-html-unsafe="m.text"></li>' +
    '</ol>';
  
  directive.controller = function($scope, $rootScope) {
    $rootScope.$on('flash:message', function(_, messages, done) {
      $scope.messages = messages;
      done();
    });
  };

  return directive;
});
