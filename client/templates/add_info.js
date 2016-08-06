Session.set('currentTemplate', 'initFishVote');

Template.addInfo.helpers({
  'renderTemplate': function(){
    // return Session.get('currentTemplate');
    return new Handlebars.SafeString(Template[Session.get('currentTemplate')]);
  }
})