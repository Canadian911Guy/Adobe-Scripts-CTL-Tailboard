// Define common variables that might be used across multiple functions
var tcRadioGroup = ["TC-Yes", "TC-No"];
var defaultDropdownValues = ["Choose From List or Fill", "Select", "Select One", "911 and/or"];
var tcFields = ["TCP Company", "TCP In Charge", "Number of TCPs", "Number of TCP Trucks", "TCP Contact Number"];
var isButton44Clicked = false;
var DEBUG = false;

// Function to initialize fields on document open
function initialize() {
    toggleCheckboxState("CheckBox6", "Text44");
    toggleCheckboxState("CheckBox7", "Text45");
	toggleEditableField();
}

// Function to toggle editable state of specific Text fields based on CheckBoxes
function toggleEditableField() {
  // Retrieve the checkbox and Text7
  var checkbox200 = this.getField("CheckBox200");
  var text7 = this.getField("Text7");

  // Debug: Print the values of CheckBox200 and Text7
  if(DEBUG) console.println("Debug - CheckBox200 value: " + (checkbox200 ? checkbox200.value : "undefined"));
  if(DEBUG) console.println("Debug - Text7 value: " + (text7 ? text7.value : "undefined"));

  // Check if both fields are found
  if (checkbox200 && text7) {
    // Check if CheckBox200 is checked or not
    var isCheckBoxChecked = checkbox200.value.toLowerCase() === "yes" || checkbox200.value.toLowerCase() === "on";
    
    // Debug: Print the value of isCheckBoxChecked
    if(DEBUG) console.println("Debug - isCheckBoxChecked: " + isCheckBoxChecked);

    // Set the readonly property and clear value based on the condition
    if (isCheckBoxChecked) { // If CheckBox200 is checked, Text7 is readonly and cleared
      text7.readonly = true;
      text7.value = "";
    } else {
      text7.readonly = false; // Set Text7 as not read-only when CheckBox200 is not checked
    }
  } else {
    if(DEBUG) console.println("CheckBox200 or Text7 is undefined or null.");
  }
}

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
    fieldsToToggle.forEach(function (field) {
      field.required = true;
      field.strokeColor = color.red;
      field.readonly = false; // Make the fields editable
    });
    
    // Debugging alert to check if TC-Yes condition is met
    if(DEBUG) console.println("TC-Yes is selected");
  } else {
    // If "TC-No" is selected, make the fields not required, clear them, and set to read-only
    fieldsToToggle.forEach(function (field) {
      field.required = false;
      field.strokeColor = color.black;
      field.readonly = true; // Set the fields to read-only
      field.value = ""; // Clear the fields
    });
    
    // Debugging alert to check if TC-No condition is met
    if(DEBUG) console.println("TC-No is selected");
  }
}

function toggleCheckboxState(checkboxFieldName, textFieldName) {
    var checkbox = this.getField(checkboxFieldName);
    var textField = this.getField(textFieldName);

    if (checkbox && textField) {
        if (checkbox.value !== "Off") { // If checkbox is checked
            textField.value = ""; // Clear the text field
            textField.readonly = true; // Set the text field to readonly
        } else {
            textField.readonly = false; // Set the text field to editable
        }
    }
}

function validateCheckboxTextFieldGroup(checkboxFieldName, textFieldName) {
    console.println("Validating: " + checkboxFieldName + ", " + textFieldName); // Debugging line
    var checkbox = this.getField(checkboxFieldName);
    var textField = this.getField(textFieldName);

    if (checkbox && textField) {
        var isCheckboxUnchecked = checkbox.value === "Off";
        var isTextFieldEmpty = !textField.value.trim();

        if(DEBUG) console.println(checkboxFieldName + " is " + checkbox.value); // Debugging line
        if(DEBUG) console.println(textFieldName + " is " + textField.value); // Debugging line

        if (isCheckboxUnchecked && isTextFieldEmpty) {
            var checkboxFieldDesc = fieldDescriptions[checkboxFieldName] || checkboxFieldName;
            var textFieldDesc = fieldDescriptions[textFieldName] || textFieldName;
            app.alert("Either '" + checkboxFieldDesc + "' must be checked or '" + textFieldDesc + "' must be filled out.");
        }
    } else {
        if(DEBUG) console.println("Either " + checkboxFieldName + " or " + textFieldName + " is undefined."); // Debugging line
    }
}

// Function to set fields as required or not required
function setFieldsRequired(fields, isRequired) {
  for (var i = 0; i < fields.length; i++) {
    var field = this.getField(fields[i]);
    if (field) {
      field.required = isRequired;
    }
  }
}

// Function to set the outline color of fields
function setFieldsOutlineColor(fields, color) {
  for (var i = 0; i < fields.length; i++) {
    var field = this.getField(fields[i]);
    if (field) {
      field.strokeColor = color;
    }
  }
}

// Function to set fields as editable or read-only
function setFieldsEditable(fields, isEditable) {
  for (var i = 0; i < fields.length; i++) {
    var field = this.getField(fields[i]);
    if (field) {
      field.readonly = !isEditable;
    }
  }
}

  // Define the ordered list of fields and field groups to be checked
  var orderedFieldsAndGroups = [
    ["CheckBox200",	"Text7"],
	"Text9",
    "Dropdown1",
    "Dropdown2",
    "FAA Cell",
    "Text11",
	["Group42"],
    ["Hospital", "Clinic"],
    "Emergency Phone Numbers",
	"First Aid Kit",
	"First Aid Level",
	["TC"],
	["Group1"],
	["Group2"],
	["Group3"],
	["Group4"],
	["Group5"],
	["Group6"],
	["Group7"],
	["Group40"],
	["Group41"],
	"TCP Company",
	"TCP In Charge",
	"Number of TCPs",
	"Number of TCP Trucks",
	"TCP Contact Number",
	["Group8"],
	["Group9"],
	["Group10"],
	["Group11"],
	["Group12"],
	["Group13"],
	["Group14"],
	["Group15"],
	["Group16"],
	["Group17"],
	["Group18"],
	["Group19"],
	["Group20"],
	["Group21"],
	["Group22"],
	["Group23"],
	["Group24"],
	["Group25"],
	["Group26"],
	["Group27"],
	["Group28"],
	["Group29"],
	["Group30"],
	["Group31"],
	["Group32"],
	["Group33"],
	["Group34"],
	["Group35"],
	["Group36"],
    "Text32",
    "Text36",
    "Before Risk 1",
    "Text40",
    "After Risk 1",
    "Text33",
    "Text37",
    "Before Risk 2",
    "Text41",
    "After Risk 2",
    ["Group100"],
    ["Text44", "CheckBox6"],
    ["Text45", "CheckBox7"],
  ];

  // Define a mapping between field names and descriptive Text
  var fieldDescriptions = {
  "CheckBox200": "Work Order N/A", // CheckBox Field
  "Text7": "Work Order Number", // Text Field
  "Text9": "Location (on Page 1)", // Text Field
  "Dropdown1": "Crew Lead (on Page 1)", // Dropdown Field
  "Dropdown2": "First Aid Attendant (on Page 1)", // Dropdown Field
  "FAA Cell": "FAA Cell (on Page 1)", // Auto-Filled Text Field
  "Text11": "Job Description (on Page 1)", // Text Field
  "Group42": "Trouble Call (on Page 1)", // Radio Buttons
  "Hospital": "Closest Hospital (on Page 1)", // Dropdowwn Field
  "Clinic": "Closest Clinic (on Page 1)", // Dropdown Field
  "Emergency Phone Numbers": "Emergency Phone Number(s) (on Page 1)", // Text Field
  "First Aid Kit": "First Aid Kit (on Page 1)", // Dropdown Field
  "First Aid Level": "First Aid Necessity Level (on Page 1)", // Dropdown Field
  "TC": "Using Traffic Control (on Page 1)", // Radio Buttons
  "Group1": "Road/Traffic Permit (on Page 1)", // Radio Buttons
  "Group2": "Confined Space Entry Permit (on Page 1)", // Radio Buttons
  "Group3": "Utility Work Permit (on Page 1)", // Radio Buttons
  "Group4": "Ground Disturbance Permit (on Page 1)", // Radio Buttons
  "Group5": "Archaeological Permit (on Page 1)", // Radio Buttons
  "Group6": "Gas Permit (on Page 1)", // Radio Buttons
  "Group7": "Railway Permit/Clearance (on Page 1)", // Radio Buttons
  "Group40": "Has all equipment undergone pre-use inspection? (on Page 2)", //Radio Buttons
  "Group41": "Are all equipment test and approvalsd up to date? (on Page 2)", // Radio Buttons
  "TCP Company": "TCP Company (on Page 2)", // Text Field
  "TCP In Charge": "TCP In Charge (on Page 2)", // Dropdown Field
  "Number of TCPs": "Number of TCPs (on Page 2)", // Text Field
  "Number of TCP Trucks": "Number of TCP Trucks (on Page 2)", // Text Field
  "TCP Contact Number": "TCP Contact Number (on Page 2)", // Text Field
  "Group8": "Qualifications of Personnel (on Page 2)", // Radio Buttons
  "Group9": "Recent Expience in Task (on Page 2)", // Radio Buttons
  "Group10": "Adequate Crew Compliment for Task (on Page 2)", // Radio Buttons
  "Group11": "Crew Members Trained for Task (on Page 2)", // Radio Buttons
  "Group12": "Other Work Groups (Contractors) (on Page 2)", // Radio Buttons
  "Group13": "Prime Contractor Designation (on Page 2)", // Radio Buttons
  "Group14": "Method of Communication (on Page 2)", // Radio Buttons
  "Group15": "Distracted Workers - Cell Phones (on Page 2)", // Radio Buttons
  "Group16": "PPE (on Page 2)", // Radio Buttons
  "Group17": "Hazard Specific PPE (on Page 2)", // Radio Buttons
  "Group18": "Fall Protection (on Page 2)", // Radio Buttons
  "Group19": "Rigging / Safe Working Load Limit (on Page 2)", // Radio Buttons
  "Group20": "Vehicle Stability Considered (on Page 2)", // Radio Buttons
  "Group21": "Chainsaw (Use, Training, PPE) (on Page 2)", // Radio Buttons
  "Group22": "Inspection of Tools & Equipment (on Page 2)", // Radio Buttons
  "Group23": "First Aid Requirements (on Page 2)", // Radio Buttons
  "Group24": "Distance to Electrical Equipment (LOA) (on Page 2)", // Radio Buttons
  "Group25": "Adjacent Structures Considered (on Page 2)", // Radio Buttons
  "Group26": "Adequate Drawings on Site (on Page 2)", // Radio Buttons
  "Group27": "Climbing Hazards Considered (on Page 2)", // Radio Buttons
  "Group28": "Pole Integrity Considered (on Page 2)", // Radio Buttons
  "Group29": "Weather Conditions Considered (on Page 2)", // Radio Buttons
  "Group30": "Housekeeping Maintained (on Page 2)", // Radio Buttons
  "Group31": "Public Safety Considered (on Page 2)", // Radio Buttons
  "Group32": "Confined Space Entry (if YES, Complete Paperwork - Permit, Testing Log, etc.) (on Page 2)", // Radio Buttons
  "Group33": "Underground Utilities / Locates Reviewed (on Page 2)", // Radio Buttons
  "Group34": "Underground Confirmation (Correct Lines) (on Page 2)", // Radio Buttons
  "Group35": "Working in Electrical Vaults (Joint Use w/ BCH) (on Page 2)", // Radio Buttons
  "Group36": "Spill Kits Present & Checked (on Page 2)", // Radio Buttons
  "Text32": "Identify Job Steps - Row #1 (on Page 2)", // Text Field
  "Text36": "Identify Hazards - Row #1 (on Page 2)", // Text Field
  "Before Risk 1": "Risk Before - Row #1 (on Page 2)", // Dropdown Field
  "Text40": "Required Controls/Barriers - Row #1 (on Page 2)", // Text Field
  "After Risk 1": "Risk After - Row #1 (on Page 2)", // Dropdown Field
  "Text33": "Identify Job Steps - Row #2 (on Page 2)", // Text Field
  "Text37": "Identify Hazards - Row #2 (on Page 2)", // Text Field
  "Before Risk 2": "Risk Before - Row #2 (on Page 2)", // Dropdown Field
  "Text41": "Required Controls/Barriers - Row #2 (on Page 2)", // Text Field
  "After Risk 2": "Risk After - Row #2 (on Page 2)", // Dropdown Field
  "Group100": "Working at 25' or Over? (on Page 3)", // Radio Buttons
  "Text44": "Management of Change", // Text Field
  "CheckBox6": "Management of Change N/A - (on Page 3)", // Checkbox
  "Text45": "Worker Concerns", // Text Field
  "CheckBox7": "Worker Concerns N/A - (on Page 3)", // Checkbox
};

function checkGroup(groupName, fieldDescriptions, orderedFieldsAndGroups) {
    var field = this.getField(groupName);

    if (field) {
        if(DEBUG) console.println("Field Type: " + field.type); // Log the type of the field.

        // Check if the field name exists in fieldDescriptions
        if (fieldDescriptions.hasOwnProperty(groupName)) {
            var defaultValue = ""; // Start with the assumption of a default value of an empty string.
            
            // If the field value is in the list of default dropdown values, then use it as the default value.
            if(defaultDropdownValues.includes(field.value)) {
                defaultValue = field.value;
            }

            // Now, compare the actual field value to the determined default value.
            if (field.value !== defaultValue) {
                if(DEBUG) console.println("Group " + groupName + " has a non-default value: " + field.value);
                orderedFieldsAndGroups.push(groupName);
            }
        } else {
            if(DEBUG) console.println("Error: No description found for group " + groupName);
        }
    } else {
        if(DEBUG) console.println("Field " + groupName + " is not found or undefined.");
    }
}

/**
 * checkMandatoryFields function
 * 
 * This function checks various form fields to ensure that mandatory fields are filled out
 * before submission. It loops over a predefined list of fields and groups, validating each one based on custom logic.
 * Alerts the user in case any of the mandatory fields are empty or not correctly filled out.
 */
function checkMandatoryFields() { 
    for (var mainIndex = 0; mainIndex < orderedFieldsAndGroups.length; mainIndex++) {
        var item = orderedFieldsAndGroups[mainIndex];

        if (Array.isArray(item)) {
            if (item.indexOf("Hospital") !== -1 && item.indexOf("Clinic") !== -1) {
                var hospitalField = this.getField("Hospital");
                var clinicField = this.getField("Clinic");
                if (hospitalField && clinicField) {
                    var hospitalValue = typeof hospitalField.valueAsString === 'string' ? hospitalField.valueAsString.trim() : '';
					var clinicValue = typeof clinicField.valueAsString === 'string' ? clinicField.valueAsString.trim() : '';
                    if (defaultDropdownValues.indexOf(hospitalValue) >= 0 && defaultDropdownValues.indexOf(clinicValue) >= 0) {
                        app.alert("Either '" + (fieldDescriptions["Hospital"] || "Hospital") + "' or '" + (fieldDescriptions["Clinic"] || "Clinic") + "' must be selected, or both.");
                        return;
                    }
                }
            } else if (item.indexOf("CheckBox200") !== -1 && item.indexOf("Text7") !== -1) {
                var checkbox200 = this.getField("CheckBox200");
                var text7 = this.getField("Text7");
                if (!(checkbox200 && (checkbox200.value === "Yes" || checkbox200.value === "On")) && !(text7 && typeof text7.value === "string" && text7.value.trim() !== "")) {
                    app.alert("Either '" + (fieldDescriptions["CheckBox200"] || "Work Order N/A") + "' must be checked or '" + (fieldDescriptions["Text7"] || "Work Order Number") + "' must be filled out.");
                    return;
                }
            } else {
                var groupHasValue = false;
                for (var i = 0; i < item.length; i++) {
                    var groupField = this.getField(item[i]);
                    if (groupField && groupField.value !== "Off") {
                        groupHasValue = true;
                        break;
                    }
                }
                if (!groupHasValue) {
                    var descriptions = item.map(function(fieldName) {
                        return fieldDescriptions[fieldName] || fieldName;
                    });
                    app.alert("One of the fields in the group [" + descriptions.join(", ") + "] must be filled out.");
                    return;
                }
            }
        } else {
            var field = this.getField(item);
            if (DEBUG) console.println("Processing: " + item);

            var tcField = this.getField("TC");
            if (tcField && tcField.value === "TC-No" && tcFields.indexOf(item) !== -1) {
                continue;
            }

            if (!field || (field.type === "combobox" && defaultDropdownValues.indexOf(field.value) > -1) || field.value === "") {
                var description = fieldDescriptions[item] || item;
                if (DEBUG) console.println("Alerting for: " + description);
                app.alert("The field '" + description + "' must be filled out.");
                return;
            }

            if (tcField && tcField.value === "TC-Yes" && tcFields.indexOf(item) !== -1) {
                if (typeof field.valueAsString === 'string' && field.valueAsString.trim() === "") {
                    app.alert("The field '" + (fieldDescriptions[item] || item) + "' must be filled out when TC is Yes.");
                    return;
                }
            }

            if (isButton44Clicked && (item === "CheckBox6" || item === "CheckBox7")) {
                var correspondingTextField = this.getField(item === "CheckBox6" ? "Text44" : "Text45");
                if (!correspondingTextField || (typeof correspondingTextField.valueAsString === 'string' && correspondingTextField.valueAsString.trim() === "")) {
                    app.alert("The corresponding text field for '" + (fieldDescriptions[item] || item) + "' must be filled out.");
                    return;
                }
            }
        }
    }

if (!validateCheckboxTextFieldGroup("CheckBox6", "Text44") || !validateCheckboxTextFieldGroup("CheckBox7", "Text45")) {
    return;
}

    app.alert("All mandatory fields are filled out.");
	return true; // return true as all checks are passed
}

function validateCheckboxTextFieldGroup(checkboxFieldName, textFieldName) {
  var checkbox = this.getField(checkboxFieldName);
  var textField = this.getField(textFieldName);
  if (checkbox && textField) {
    var isCheckboxUnchecked = checkbox.value === "Off";
    var isTextFieldEmpty = !textField.value.trim();
    if (isCheckboxUnchecked && isTextFieldEmpty) {
      var checkboxFieldDesc = fieldDescriptions[checkboxFieldName] || checkboxFieldName;
      var textFieldDesc = fieldDescriptions[textFieldName] || textFieldName;
      app.alert("Either '" + textFieldDesc + "' must be filled out or '" + checkboxFieldDesc + "' must be checked.");
      return false;
    }
  } else {
    if(DEBUG) console.println("Either " + textFieldName + " or " + checkboxFieldName + " is undefined.");
  }
  return true;
}

this.getField("Button44").setAction("MouseUp", "checkMandatoryFields()");
this.getField("TC").setAction("MouseUp", "toggleRequiredFields0()");
this.getField("CheckBox200").setAction("MouseUp", "toggleEditableField()");

// Call initialize function to set initial states
initialize();

