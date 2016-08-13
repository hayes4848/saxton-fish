Template.tenDay.onCreated( function() {
  this.northSide = new ReactiveVar("northSide");
  this.southSide =  new ReactiveVar("southSide");
})

Template.tenDay.helpers({

  whichGraph: function() {
    if(Session.get('side') == "North"){
        return Template.instance().northSide.get();
    } else {
      return Template.instance().southSide.get();
    }
  }

})