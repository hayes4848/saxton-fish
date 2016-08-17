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
  }, 

  getTenDayData: function() {
    var today = moment().startOf('day').toDate();
    // var tenDaysAgo = today.subtract(10, "days");
    var tenDaysAgo = moment().subtract(10, "days").startOf('day').toDate();
    var result = Votes.find({day:{$gte: tenDaysAgo, $lte: today}}).fetch();
    console.log(result);
  }

})

