// Function to be called when the radio button is clicked
function toggleRequiredFields0() {
  // Get the radio button group
  var radioButtonGroup = this.getField("TC");
  
  // Get the fields that should be toggled
  var fieldsToToggle = [
    this.getField("TCP Company"),
    this.getField("TCP In Charge"),
    this.getField("Number of TCPs"),
    this.getField("Number of TCP Trucks"),
    this.getField("TCP Contact Number")
  ];
  
  // Check the state of the radio button group
  if (radioButtonGroup.value === "TC-Yes") {
    // If "TC-Yes" is selected, make the fields required and change border color to red
    fieldsToToggle.forEach(function(field) {
      field.required = true;
      field.strokeColor = color.red;
    });
  } else {
    // If "TC-No" is selected, make the fields not required and change border color to black
    fieldsToToggle.forEach(function(field) {
      field.required = false;
      field.strokeColor = color.black;
    });
  }
}

// Attach the function to the radio button group's Mouse Up event
this.getField("TC").setAction("MouseUp", "toggleRequiredFields0()");
