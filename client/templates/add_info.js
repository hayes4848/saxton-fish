Template.addInfo.onCreated( function() {
  this.currentTab = new ReactiveVar( "initFishVote" );
});


Template.addInfo.helpers({
  tab: function() {
    return Template.instance().currentTab.get();
  }
});

Template.addInfo.events({
  'click #fish1': function(){
    Template.instance().currentTab.set('fish1')
  },
   'click #fish2': function(){
    Template.instance().currentTab.set('fish2')
  },
   'click #fish3': function(){
    Template.instance().currentTab.set('fish3')
  },
   'click #fish4': function(){
    Template.instance().currentTab.set('fish4')
  },
   'click #fish5': function(){
    Template.instance().currentTab.set('fish5')
  },
  'click #submit1': function() {
    var vote = {
      date: new Date(),
      side: Session.get('side'),
      vote: 'fish1'
    };

    vote._id = Votes.insert(vote);
    Router.go('todayIndex');
  },
  'click #submit2': function() {
    var vote = {
      date: new Date(),
      side: Session.get('side'),
      vote: 'fish2'
    };

    vote._id = Votes.insert(vote);
    Router.go('todayIndex');
  },
  'click #submit3': function() {
    var vote = {
      date: new Date(),
      side: Session.get('side'),
      vote: 'fish3'
    };

    vote._id = Votes.insert(vote);
    Router.go('todayIndex');
  },
  'click #submit4': function() {
    var vote = {
      date: new Date(),
      side: Session.get('side'),
      vote: 'fish4'
    };

    vote._id = Votes.insert(vote);
    Router.go('todayIndex');
  },
  'click #submit5': function() {
    var vote = {
      date: new Date(),
      side: Session.get('side'),
      vote: 'fish5'
    };

    vote._id = Votes.insert(vote);
    Router.go('todayIndex');
  },
})



// var profile = {
//       name: $(e.target).find('[name=name]').val(),
//       barn: $(e.target).find('[name=barn]').val(),
//       city: $(e.target).find('[name=city]').val(),
//       state: $(e.target).find('[name=state]').val(),
//       phone: $(e.target).find('[name=phone]').val(),
//       email: $(e.target).find('[name=email]').val(),
//       url: $(e.target).find('[name=url]').val(),
//       user: Meteor.userId(), 
//       date: new Date(),
//     };
//    profile._id = Profiles.insert(profile); 