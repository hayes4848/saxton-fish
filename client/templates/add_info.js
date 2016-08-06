Template.addInfo.onCreated( function() {
  this.currentTab = new ReactiveVar( "initFishVote" );
});


Template.addInfo.helpers({
  tab: function() {
    return Template.instance().currentTab.get();
  }
})