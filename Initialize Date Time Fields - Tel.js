// Initialize function to set date and time fields
function initializeDateTimeFields() {
  // Custom function to pad numbers with leading zeros
  function padNumber(num) {
    return (num < 10 ? '0' : '') + num;
  }

  // Get today's date
  var today = new Date();
  
  // Get the day, month, and year
  var day = padNumber(today.getDate());
  var year = today.getFullYear();
  
  // Get the month name and convert it to its three-letter abbreviation
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = monthNames[today.getMonth()];
  
  // Combine them to form the date in the format dd-mmm-yyyy
  var formattedDate = day + '-' + month + '-' + year;
  
  // Get current time in the format HH:MM (24-hour format)
  var formattedTime = padNumber(today.getHours()) + ':' + padNumber(today.getMinutes());
  
  // Determine AM or PM
  var amOrPm = today.getHours() < 12 ? "AM" : "PM";
  
  // Set the date, time, and AM/PM fields if they are empty
  var dateField = this.getField("Date1_af_date");
  var timeField = this.getField("Time");
  var amPmField = this.getField("AM:PM");
  
  if (dateField && !dateField.value) {
    dateField.value = formattedDate;
  }
  
  if (timeField && !timeField.value) {
    timeField.value = formattedTime;
  }
  
  if (amPmField && !amPmField.value) {
    amPmField.value = amOrPm;
  }
}

// Call the initialize function when the document is opened
initializeDateTimeFields();