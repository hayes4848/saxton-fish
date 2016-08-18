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
});

Template.southSide.helpers({
  dataPointOne: function(){
    return buildGraphData()[0];
  },
  dataPointTwo: function(){
    return buildGraphData()[1];
  },
  dataPointThree: function(){
    return buildGraphData()[2];
  },
  dataPointFour: function(){
    return buildGraphData()[3];
  },
  dataPointFive: function(){
    return buildGraphData()[4];
  },
  dataPointSix: function(){
    return buildGraphData()[5];
  },
  dataPointSeven: function(){
    return buildGraphData()[6];
  },
  dataPointEight: function(){
    return buildGraphData()[7];
  },
  dataPointNine: function(){
    return buildGraphData()[8];
  },
  dataPointTen: function(){
    return buildGraphData()[9];
  }
});

  function buildGraphData() {
    graphHash = {};
    for(var i=0; i< 10; i++){
      graphHash[i] = getTenDayData(i);
    }
    return graphHash;
  }

  function getTenDayData(i) {
    var daysAgo = moment().subtract(i, "days").startOf('day').toDate();
    var result = Votes.find({side: "South", day: daysAgo}).fetch();
    var winner = whichFish(result);
    if(winner == "fish1"){
      return "20%";
    } else if(winner == "fish2"){
      return "40%";
    } else if(winner == "fish3"){
      return "60%";
    } else if(winner == "fish4"){
      return "80%";
    } else if(winner == "fish5"){
      return "100%";
    } else {
      return "10%";
    }
    return winner = whichFish(result);
  };

  function whichFish(result) {
    if(result.length > 0){
      var voteTally = {};
      var fish='';
      for(var i=0; i < result.length; i++) { 
        var fish = result[i].vote
        count = 0;
        for(var j=0; j < result.length; j++) {
          if(result[j].vote == fish){
            count ++;
          }
        }
        voteTally[result[i].vote] = count;
      }

      var keysSorted = Object.keys(voteTally).sort(function(a,b){return voteTally[a]-voteTally[b]});
      return lastItem = keysSorted.pop();
    } else {
      return 'noFish';
    }
  }
