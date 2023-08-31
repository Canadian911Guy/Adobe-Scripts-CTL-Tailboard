// Function to be called when the checkbox is clicked
function toggleEditableField() {
  // Get the checkbox field
  var checkbox = this.getField("CheckBox200");
  
  // Get the text field that should be toggled
  var textField = this.getField("Text7");
  
  // Check the state of the checkbox
  if (checkbox.isBoxChecked(0)) {
    // If checked, make the text field uneditable and clear its value
    textField.readonly = true;
    textField.value = "";
  } else {
    // If unchecked, make the text field editable
    textField.readonly = false;
  }
}

// Attach the function to the checkbox's Mouse Up event
this.getField("CheckBox200").setAction("MouseUp", "toggleEditableField()");