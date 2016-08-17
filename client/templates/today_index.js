Template.todayIndex.onCreated( function() {
  this.noVote =  new ReactiveVar("noVote");
  this.guppy =   new ReactiveVar( "guppy" );
  this.codFish = new ReactiveVar( "codFish" );
  this.seaBass = new ReactiveVar( "seaBass" );
  this.pollock = new ReactiveVar( "pollock" );
  this.grouper = new ReactiveVar( "grouper" );
});

Template.todayIndex.helpers({
  // whichFish: function() {
  //   var date = new Date()
  //   var today = moment(date).format("MM.DD.YYYY");

  //   return Votes.find()
  // },
  whichFish: function() {
    date = new Date();
    today = moment(date).format("MM.DD.YYYY");
    allVotes = Votes.find({side:"South", day:moment().startOf('day').toDate()}).fetch();
    // allVotes = Votes.find().fetch();
    console.log(moment(date).startOf('day'));
    var voteTally = {};
    var fish='';
    for(var i=0; i < allVotes.length; i++) { 
      var fish = allVotes[i].vote
      count = 0;
      for(var j=0; j < allVotes.length; j++) {
        if(allVotes[j].vote == fish){
          count ++;
        }
      }
      voteTally[allVotes[i].vote] = count;
    };

    var keysSorted = Object.keys(voteTally).sort(function(a,b){return voteTally[a]-voteTally[b]});

    var lastItem = keysSorted.pop();

    if(Session.get('side') == "North"){
      return Template.instance().guppy.get();
    } else if(allVotes.length < 1){
      return Template.instance().noVote.get();
    } else if(Session.get('side') == "South" && lastItem == "fish1"){
      return Template.instance().guppy.get();
    } else if(Session.get('side') == "South" && lastItem == "fish2"){
      return Template.instance().codFish.get();
    } else if(Session.get('side') == "South" && lastItem == "fish3"){
      return Template.instance().seaBass.get();
    } else if(Session.get('side') == "South" && lastItem == "fish4"){
      return Template.instance().pollock.get();
    } else if(Session.get('side') == "South" && lastItem == "fish5"){
      return Template.instance().grouper.get();
    }
    
  },

  todayDate: function() {
    date = new Date();
    today = moment(date).format("MM.DD.YYYY");
    month = dateToText(moment(date).format("MM"));
    dateString  = dateToText(moment(date).format("MM")) + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY");
    return dateString;
  }, 

})

 function dateToText(month) {
    if(month == '01'){
      return "JANUARY";
    } else if(month == '02'){
      return "FEBRUARY";
    } else if(month == '03'){
      return "MARCH";
    }else if(month == '04'){
      return "APRIL";
    } else if(month == '05'){
      return "MAY";
    } else if(month == '06'){
      return "JUNE";
    } else if(month == '07'){
      return "JULY";
    } else if(month == '08'){
      return "AUGUST";
    } else if(month == '09'){
      return "SEPTEMBER";
    } else if(month == '10'){
      return "OCTOBER";
    } else if(month == '11'){
      return "NOVEMBER";
    } else if(month == '12'){
      return "DECEMBER";
    }
  }