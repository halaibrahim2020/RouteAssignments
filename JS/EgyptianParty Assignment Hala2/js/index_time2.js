// let date1 = new Date("10/09/2024");
// let date2 = new Date("10/14/2024");

// // Use Intl.DateTimeFormat to format dates
// let dateFormatter = new Intl.DateTimeFormat('en-US');

// // Calculate the number of days between two dates
// let Difference_In_Days = 
//     Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

// // Display the formatted dates and the difference in days
// console.log(`Total number of days between dates:
// ${dateFormatter.format(date1)} and ${dateFormatter.format(date2)} is: 
// ${Difference_In_Days} days`);

// ============
// $(document).ready(function() {    
//     function calculateTime() {
//             //get values
//             var valuestart = $("select[name='timestart']").val();
//             var valuestop = $("select[name='timestop']").val();
    
//              //create date format          
//              var timeStart = new Date("01/01/2007 " + valuestart);
//              var timeEnd = new Date("01/01/2007 " + valuestop);
    
//              var difference = timeEnd - timeStart;             
    
//              difference = difference / 60 / 60 / 1000;
    
    
//         $("p").html("<b>Hour Difference:</b> " + difference)             
    
//     }
//     $("select").change(calculateTime);
//     calculateTime();
//     });​

// =====================
function getTimeDifference(startTime, endTime) {
    const difference = endTime - startTime;
    const differenceInMinutes = difference / 1000 / 60;
    let hours = Math.floor(differenceInMinutes / 60);
    if (hours < 0) {
      hours = 24 + hours;
    }
    let minutes = Math.floor(differenceInMinutes % 60);
    if (minutes < 0) {
      minutes = 60 + minutes;
    }
    const hoursAndMinutes = hours + ":" + (minutes < 10 ? '0' : '') + minutes;
    return hoursAndMinutes;
  }
  
//   const start = new Date(0,0,0,23,15);
//   const end = new Date(0,0,0,1,30);

    
  const start = new Date('10/10/2024');
  const end = new Date();

  const differenceDays = getTimeDifference(start, end);
  console.log('differenceDays',differenceDays);

