// Define a function called diff_minutes that calculates the difference in minutes between two Date objects (dt2 and dt1)
function diff_minutes(dt2, dt1) 
 {
  // Calculate the difference in milliseconds between the two provided dates and convert it to seconds
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  // Convert the difference from seconds to minutes
  diff /= 60;
  // Return the absolute value of the rounded difference in minutes
  return Math.abs(Math.round(diff));
 }

 function diff_hours(dt2, dt1) 
 {
  // Calculate the difference in milliseconds between the two provided dates and convert it to seconds
  var diff =(dt2.getTime() - dt1.getTime()) /(1000*60) ;
  // Convert the difference from seconds to minutes
  diff /= 60;
  // Return the absolute value of the rounded difference in minutes
  return Math.abs(Math.round(diff));
 }
 function diff_days(dt2, dt1) 
 {
  // Calculate the difference in milliseconds between the two provided dates and convert it to seconds
  var diff =(dt2.getTime() - dt1.getTime()) /(1000*60*60*24) ;
  // Convert the difference from seconds to minutes
  diff /= 60;
  // Return the absolute value of the rounded difference in minutes
  return Math.abs(Math.round(diff));
 }


// Create a Date object dt1 representing November 2, 2014
dt1 = new Date(2024,9,10);
// Create a Date object dt2 representing November 3, 2014
dt2 = new Date();
// Output the difference in minutes between dt1 and dt2 using the diff_minutes function
console.log('diff_minutes',diff_minutes(dt1, dt2));
console.log('diff_hours',diff_hours(dt1, dt2));
console.log('diff_days',diff_days(dt1, dt2));
