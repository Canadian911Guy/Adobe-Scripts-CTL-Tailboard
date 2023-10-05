// Function to check mandatory fields and conditions
function checkMandatoryFields() {
  console.println("Function is running");

  // Debug: Print all field names
  for (var i = 0; i < this.numFields; i++) {
    var fieldName = this.getNthFieldName(i);
    console.println("Field name: " + fieldName);
  }

  // Define default values for dropdowns
  var defaultDropdownValues = ["Choose Crew Lead", "Choose From List", "Choose From List or Fill", "Choose"];

  // Define the ordered list of fields and field groups
  var orderedFieldsAndGroups = [
    ["Group44"],
	"Task Location",
    "CrewLeader",
    "First Aid Attendant",
    "FAA Cell",
    "Job Description",
    ["SPG Holder", "SPG-NA"],
    ["LLP Breaker / Recloser #", "LLP-NA"],
    ["Self-Protection", "SP-NA"],
    ["Group16"],
    ["Group17"],
    "Hospital",
    "Clinic",
    "Emergency Phone #",
    "Identify Job Steps.0",
    "Identify Hazards.0",
    "Risk.0.0",
    "Required Controls.0",
    "Risk.0.1",
    ["Grounding Plan", "GP-NA"],
    ["Workers Concerns or Suggestions", "Concerns-NA"],
    ["Management of Change", "MOC-NA"],
	["Group100"]
  ];

  // Define a mapping between field names and descriptive text
  var fieldDescriptions = {
  "Group44": "Trouble Call - (Page 1)",
  "Task Location": "Task Location - (Page 1)",
  "CrewLeader": "Crew Leader - (Page 1)",
  "First Aid Attendant": "First Aid Attendant - (Page 1)",
  "FAA Cell": "FAA Cell - (Page 1)",
  "Job Description": "Job Description - (Page 1)",
  "SPG Holder - (Page 1)": "SPG Holder",
  "SPG-NA": "SPG Holder - (Page 1)",
  "LLP Breaker / Recloser #": "LLP Breaker / Recloser # - (Page 1)",
  "LLP-NA": "LLP Breaker / Recloser # - (Page 1)",
  "Self-Protection": "Self-Protection (Record of Isolation Point) - (Page 1)",
  "SP-NA": "Self-Protection (Record of Isolation Point) - (Page 1)",
  "Group16": "First Aid Kit - (Page 1)",
  "Group17": "AED Unit in Truck - (Page 1)",
  "Hospital": "Closest Hospital - (Page 1)",
  "Clinic": "Closest Clinic - (Page 1)",
  "Emergency Phone #": "Emergency Phone # - (Page 1)",
  "Identify Job Steps.0": "Identify Job Steps - (Page 2)",
  "Identify Hazards.0": "Identify Hazards - (Page 2)",
  "Risk.0.0": "Initial Risk - (Page 2)",
  "Required Controls.0": "Required Controls - (Page 2)",
  "Risk.0.1": "Residual Risk - (Page 2)",
  "Grounding Plan": "Grounding Plan - (Page 2)",
  "GP-NA": "Grounding Plan - (Page 2)",
  "Workers Concerns or Suggestions": "Worker Concerns or Suggestions - (Page 2)",
  "Concerns-NA": "Worker Concerns or Suggestions - (Page 2)",
  "Management of Change": "Management of Change - (Page 2)",
  "MOC-NA": "Management of Change - (Page 2)",
  "Group100": "Working at 25' or Over - (Page 3)"
};

  // Function to check if at least one field in a group is selected and not in its default state
  function checkGroup(group, defaultDropdownValues, doc) {
    console.println("Checking group: " + group.join(", "));
    for (var i = 0; i < group.length; i++) {
      var field = doc.getField(group[i]);
      if (field) {
        console.println("Field name: " + group[i] + ", Field value: " + field.value + ", Field type: " + field.fieldType);
        if (field.fieldType === "radiobutton") {
          if (field.value !== "Off") {
            console.println("Group is valid.");
            return true;
          }
        } else if (field.fieldType === "checkbox") {
          if (field.value !== "Off") {
            console.println("Group is valid.");
            return true;
          }
        } else if (field.value !== "" && field.value !== "Off" && defaultDropdownValues.indexOf(field.value) === -1) {
          console.println("Group is valid.");
          return true;
        }
      } else {
        console.println("Field " + group[i] + " not found.");
      }
    }
    console.println("Group is invalid.");
    return false;
  }

  // Check each field or field group in the specified order
  for (var i = 0; i < orderedFieldsAndGroups.length; i++) {
    var item = orderedFieldsAndGroups[i];
    
    if (Array.isArray(item)) {
        // It's a group, check if at least one is selected
        if (!checkGroup(item, defaultDropdownValues, this)) {
            var alertText = "You must ";
            if (item[0] === "Group44" || item[0] === "Group16" || item[0] === "Group100") {
                alertText += 'choose "Yes" or "No" for ';
            } else if (item[0] === "Group17") {
                alertText += 'choose "Yes", "No", or "N/A" for ';
            } else {
                alertText += 'fill in ';
            }
            alertText += fieldDescriptions[item[0]] || item[0];
            if (item[0] !== "Group44" && item[0] !== "Group16" && item[0] !== "Group100" && item[0] !== "Group17") {
                alertText += ' or choose N/A.';
            }
            app.alert(alertText);
            return;
        }
    } else {

      // Special case for "Hospital" or "Clinic"
      if (item === "Hospital" || item === "Clinic") {
        var hospitalField = this.getField("Hospital");
        var clinicField = this.getField("Clinic");
        
        if ((!hospitalField || defaultDropdownValues.indexOf(hospitalField.value) !== -1) &&
            (!clinicField || defaultDropdownValues.indexOf(clinicField.value) !== -1)) {
          var alertText = "You must fill in either 'Hospital' or 'Clinic' or BOTH.";
          app.alert(alertText);
          return;
        }
      } else {
        // It's a single field, check if it's filled
        var field = this.getField(item);
        if (!field || field.value === "" || defaultDropdownValues.indexOf(field.value) !== -1) {
          var alertText = "The field '" + (fieldDescriptions[item] || item) + "' must be filled out.";
          app.alert(alertText);
          return;
        }
      }
    }
  }

  // Check for the "Permits-NA" condition
  if (this.getField("SPG-NA").value !== "Off" && this.getField("LLP-NA").value !== "Off" && this.getField("SP-NA").value !== "Off") {
    this.getField("Permits-NA").value = "Yes";
  }
  
  // Check for the "FP-Yes" condition
  if (this.getField("Group100").value === "Yes") {
    this.getField("FP-Yes").value = "Yes";
  }

  // Proceed with further actions like saving or submitting the form

  app.alert("All Mandatory Fields are Completed");
}

// Trigger the function
//checkMandatoryFields();