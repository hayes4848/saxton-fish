Template.todayIndex.onCreated( function() {
  this.currentTab = new ReactiveVar( "codFish" );
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
    console.log(allVotes);
    return Template.instance().currentTab.get();
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