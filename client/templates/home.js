Template.home.events({
  'click .button-north': function() {
    Session.set('side', 'North');
  },
  'click .button-south': function() {
    Session.set('side', 'South');
  },
})