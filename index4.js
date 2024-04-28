// Mini Assignment - 04

// Print dates in the following formats
// Wed 24-Apr 7:45 PM
// April 5th 07:45 PM

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let day = days[date.getDay()].slice(0, 3);
let set_date = date.getDate();
let month = months[date.getMonth()].slice(0, 3);
let hour = date.getHours();
let mint = date.getMinutes();
let ampm = "";


// Condition AM and PM
if (hour === 0) {
  hour = 12;
  ampm = "AM";
} else if (hour < 12) {
  ampm = "AM";
} else {
  hour = hour - 12;
  ampm = "PM";
}

let final_date_1 = (`${day} ${set_date}-${month} ${hour}:${mint} ${ampm}`);


// Condition 1st, 2nd, 3rd, 4th etc
if (set_date === 1 || set_date === 21 || set_date === 31) {
  set_date = `${set_date}st`;
} else if (set_date === 2 || set_date === 22) {
  set_date = `${set_date}nd`;
} else if (set_date === 3 || set_date === 23) {
  set_date = `${set_date}3rd`;
} else if (set_date > 3) {
  set_date = `${set_date}th`;
}

let final_date_2 = (`${months[date.getMonth()]} ${set_date} ${String(hour).padStart(2, 0)}:${String(mint).padStart(2, 0)} ${ampm}`);


console.log(final_date_1);
console.log(final_date_2);