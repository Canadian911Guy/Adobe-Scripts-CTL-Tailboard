// List of names for the "CrewLeader" dropdown
var CREW_LEADER_NAMES = [
	"Bradley Franks",
	"Clayton Rae",
	"Corbin Shapcott",
	"Dave Carey",
	"Dayton Henderson",
	"Dean Hodges",
	"Eric Tasler",
	"Joe Leakey",
	"Eric Barr",
	"John Switzer",
	"Justin Cuscianna",
	"Lach Hadley",
	"Matt Henwood",
	"Richard Addis",
	"Tanner Lewis",
	"Tayler Lagos",
];

// Validation script for the "CrewLeader" dropdown
function copyCrewLeaderToCrewLead() {
  // Get the selected name from the "CrewLeader" dropdown
  var selectedName = event.value;

  // Check if the selected name is in the list of valid names
  if (CREW_LEADER_NAMES.indexOf(selectedName) !== -1) {
    // Get the "CrewLead" text field by its name
    var textField = this.getField("CrewLead");

    // Copy the value from the "CrewLeader" dropdown to the "CrewLead" text field
    if (textField) {
      textField.value = selectedName;
    }
  } else {
    // Optionally, clear the "CrewLead" text field if the name isn't recognized
    this.getField("CrewLead").value = "";
  }
}