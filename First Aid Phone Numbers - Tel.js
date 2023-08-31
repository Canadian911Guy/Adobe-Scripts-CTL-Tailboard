// Define the list of names and their associated phone numbers
var phoneNumbers = {
	"Bradley Franks": "2502128818",
	"Clayton Rae": "2502529909",
	"Corbin Shapcott": "2502529156",
	"Dave Carey": "2507094854",
	"Dayton Henderson": "2502527797",
	"Dean Hodges": "2506611720",
	"Eric Tasler": "2502526615",
	"Joe Leakey": "2502528444",
	"Eric Barr": "2505105906",
	"John Switzer": "2505101748",
	"Justin Cuscianna": "2505102105",
	"Lach Hadley": "2502526635",
	"Matt Henwood": "2502526625",
	"Richard Addis": "2502527703",
	"Tanner Lewis": "2502524434",
	"Tayler Lagos": "2502527787",
    //... add more names and numbers here
};

// Get the selected name from the dropdown
var selectedName = event.value;

// Check if the name exists in our phoneNumbers list
if (phoneNumbers[selectedName]) {
	// Set the phone number field to the associated number
	this.getField("FAA Cell").value = phoneNumbers[selectedName];
} else {
	// Clear the phone number field if the name isn't recognized
	this.getField("FAA Cell").value = "";
}