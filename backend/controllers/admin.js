
const User = require('../models/users')

exports.getadmin = (req,res,next) => {
    // Get the current date
const currentDate = new Date();

// Array of month names
const monthNames = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

const weekDayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  
const currentMonthIndex = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const currentDateOfMonth = currentDate.getDate();
const currentWeekDayIndex = currentDate.getDay();
  
  // Get the current weekday name
  const currentWeekDayName = weekDayNames[currentWeekDayIndex];
  // Get the current month name
const currentMonthName = monthNames[currentMonthIndex];
 

    res.render('calendar' , { path : '/calendar' , 
    month : currentMonthName ,
     weekday : currentWeekDayName ,
    day : currentDateOfMonth ,
    year : currentYear
  })
};


exports.getbookinglist = (req,res,next) => {

     const userlist = User.find({ isadmin : false })
     .then( result => {
      console.log(result);

      return res.render('booking-list' , {path : '/booking-list' , userlist : result})

     })
     .catch ( err => {
      console.log(err);
     })
     
}
