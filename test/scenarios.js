describe('Flash Messages', function() {

  beforeEach(module('flash'));

  beforeEach(function() {
    browser().navigateTo('test/app.html');
  });

  it('renders an empty ordered list on its initial state', function() {
    expect(element('ol#flash-messages').count()).toBe(1);
    expect(element('ol#flash-messages > li').count()).toBe(0);
  });

  describe('when on the same view', function(){
    beforeEach(function() { element('#goEdit').click(); });

    it('renders a message with the default "success" level', function() {
      element('#saveSuccess').click();
      var messages = element('ol#flash-messages > li');
      expect(messages.count()).toBe(1);
      expect(messages.prop('className')).toEqual('success');
      expect(messages.text()).toEqual('Saved successfully!');
    });
    
    it('renders a message with the level and text provided', function() {
      element('#saveFailure').click();
      var messages = element('ol#flash-messages > li');
      expect(messages.count()).toBe(1);
      expect(messages.prop('className')).toEqual('error');
      expect(messages.text()).toEqual('Something went wrong!');
    });
    
    it('renders multiple messages with the default "success" level and text', function() {
      element('#saveMultipleSuccess').click();
      var yay = element('ol#flash-messages > li:first');
      expect(yay.prop('className')).toEqual('success');
      expect(yay.text()).toEqual('Yay!');
      var saved = element('ol#flash-messages > li:nth-of-type(2)');
      expect(saved.prop('className')).toEqual('success');
      expect(saved.text()).toEqual('Saved successfully!');
    });
    
    it('renders multiple messages with the level and text provided', function() {
      element('#saveMultipleTypes').click();
      var yay = element('ol#flash-messages > li:first');
      expect(yay.prop('className')).toEqual('success');
      expect(yay.text()).toEqual('Yay!');
      var somethingWrong = element('ol#flash-messages > li:nth-of-type(2)');
      expect(somethingWrong.prop('className')).toEqual('error');
      expect(somethingWrong.text()).toEqual('Something went wrong!');
    });
  });

  describe('when navigating to another view', function() {
    
    it('renders a message with the default "success" level', function() {
      element('#goEditSuccess').click();
      var messages = element('ol#flash-messages > li');
      expect(messages.count()).toBe(1);
      expect(messages.prop('className')).toEqual('success');
      expect(messages.text()).toEqual('You have reached the edit page!');
    });
    
    it('renders a message with the level and text provided', function() {
      element('#goEditFailure').click();
      var messages = element('ol#flash-messages > li');
      expect(messages.count()).toBe(1);
      expect(messages.prop('className')).toEqual('error');
      expect(messages.text()).toEqual('Something went wrong!');
    });
    
    it('renders multiple messages with the default "success" level and text', function() {
      element('#goEditMultipleSuccess').click();
      var yay = element('ol#flash-messages > li:first');
      expect(yay.prop('className')).toEqual('success');
      expect(yay.text()).toEqual('Yay!');
      var youveReached = element('ol#flash-messages > li:nth-of-type(2)');
      expect(youveReached.prop('className')).toEqual('success');
      expect(youveReached.text()).toEqual('You have reached the edit page!');
    });
    
    it('renders multiple messages with the level and text provided', function() {
      element('#goEditMultipleTypes').click();
      var yay = element('ol#flash-messages > li:first');
      expect(yay.prop('className')).toEqual('success');
      expect(yay.text()).toEqual('Yay!');
      var somethingWrong = element('ol#flash-messages > li:nth-of-type(2)');
      expect(somethingWrong.prop('className')).toEqual('error');
      expect(somethingWrong.text()).toEqual('Something went wrong!');
    });
  });
});