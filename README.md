# angular-flash

Flash messages for Angular.js.

Supports view changes, which means you can set a flash message, navigate to another view and your message will be displayed.

## Usage
After adding `angular-flash.js` to your project, add `flash` as a dependency to your module. Here is a simple example:

```javascript
angular.module('myModule', ['flash'])
.controller('EditProductController', function($scope, flash) {
  $scope.save = function() {
    // … save the product
    flash('Saved!');
  };
});
```

Then, in your HTML, simply add the `<flash-messages>` element where you want your messages to be displayed. It can be in your main template or individual partials.

```html
  <body ng-app="myModule">
    <flash-messages></flash-messages>
    
    <article ng-controller="HomeController">
      <h1>Home</h1>  
    </article>
  </body>
```

## Examples

 - `flash('My message')`

```html
<ol id="flash-messages">
  <li class="success">My message</li>
</ol>
```

 - `flash([ 'Hi!', 'My message' ])`

```html
<ol id="flash-messages">
  <li class="success">Hi</li>
  <li class="success">My message</li>
</ol>
```

 - `flash('error', 'Something went wrong…')`

```html
<ol id="flash-messages">
  <li class="error">Something went wrong…</li>
</ol>
```

 - `flash([ 'Hi!', { level: 'warning', text: 'This is a warning!' } ])`

```html
<ol id="flash-messages">
  <li class="success">Hi</li>
  <li class="warning">This is a warning!</li>
</ol>
```

## License
This is licensed under the feel-free-to-do-whatever-you-want-to-do license.
