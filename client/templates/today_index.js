Template.todayIndex.onCreated( function() {
  this.guppy = new ReactiveVar( "guppy" );
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
    allVotes = Votes.find({side:"South", day:today}).fetch();

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

    console.log(allVotes);

    if(lastItem == "fish1"){
      return Template.instance().guppy.get();
    } else if(lastItem == "fish2"){
      return Template.instance().codFish.get();
    } else if(lastItem == "fish3"){
      return Template.instance().seaBass.get();
    } else if(lastItem == "fish4"){
      return Template.instance().pollock.get();
    } else if(lastItem == "fish5"){
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
      return "January";
    } else if(month == '02'){
      return "February";
    } else if(month == '03'){
      return "March";
    }else if(month == '04'){
      return "April";
    } else if(month == '05'){
      return "May";
    } else if(month == '06'){
      return "June";
    } else if(month == '07'){
      return "July";
    } else if(month == '08'){
      return "August";
    } else if(month == '09'){
      return "September";
    } else if(month == '10'){
      return "October";
    } else if(month == '11'){
      return "November";
    } else if(month == '12'){
      return "December";
    }
  }