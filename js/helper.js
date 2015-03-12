/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<div class="pure-u-1"><h2>%data%</h2></div>';

var HTMLsideHeaderName = '<a class="pure-menu-heading" id="side-name" href="#">%data%</a>';

var HTMLmobile = '<li class="pure-menu-item phone"><a href="tel: %data%" target="_blank" class="pure-menu-link"><i class="fa fa-phone"></i>&nbsp %data% </a></li>';
var HTMLemail = '<li class="pure-menu-item"><a href="mailto:%data%"  target="_blank" class="pure-menu-link"><i class="fa fa-envelope-o"></i>&nbsp %data% </a></li>';
var HTMLtwitter = '<li class="pure-menu-item"><a href="https://twitter.com/%data%"  target="_blank" class="pure-menu-link"><i class="fa fa-twitter"></i>&nbsp @%data% </a></li>';
var HTMLgithub = '<li class="pure-menu-item"><a href="https://github.com/%data%"  target="_blank" class="pure-menu-link"><i class="fa fa-github"></i>&nbsp %data% </a></li>';
var HTMLlocation = '<li class="pure-menu-item"><a href="#"  target="_blank" class="pure-menu-link"><i class="fa fa-home"></i>&nbsp %data% </a></li>';

var HTMLbioPic = '<div class="pure-u-1"><img src="%data%" class="pure-img-responsive cap-height"></div>';
var HTMLWelcomeMsg = '<div class="pure-u-1 pure-u-md-1-3"> <p>%data%</p></div>';

var HTMLskillsStart = '<div class="skills-entry pure-u-1"><h3 id="skillsH3">Skills at a Glance</h3></div><div class = "pure-u-24-24"  id="skills"></div>';

var HTMLskills = '<div class="pure-u-1 pure-u-md-1-6"><p>%data%</p></div>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<h3 class= "less-margin-below"><a href="#">%data%';
var HTMLworkTitle = ' - %data%</a></h3>';
var HTMLworkDates = '<div class="pure-u-1 pure-u-md-1-2"><p class= "date-text">%data%</p></div>';
var HTMLworkLocation = '<div class="pure-u-1 pure-u-md-1-2"><p class= "location-text">%data%</p></div>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry pure-u-1 pure-u-md-1-3 project-box"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="pure-u-1 pure-u-md-1-2"><p class= "date-text">%data%</p></div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="pure-img-responsive" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<h3 class= "less-margin-below"><a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a><h3>';
var HTMLschoolDates = '<div class="pure-u-1 pure-u-md-1-2"><p class= "date-text">%data%</p></div>';
var HTMLschoolLocation = '<div class="pure-u-1 pure-u-md-1-2 "><p class= "location-text">%data%</p></div>';
var HTMLschoolMajor = '<div class="pure-u-1 pure-u-md-1-2 "><p>Major: %data%</p></div>';

var HTMLonlineClasses = '<h3> Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="pure-u-1 pure-u-md-1-2"><p class= "date-text">%data%</p></div>';
var HTMLonlineURL = '<div class="pure-u-1 pure-u-md-1-2 "><a href="#">%data%</a><div>';

var internationalizeButton = '<div class="pure-u-1-2"><button id= "button1" class ="button-xsmall pure-button"><i class="fa fa-globe"></i> INTERNATIONALISE</button></div>';
var americanizeButton = '<div class="pure-u-1-2"><button id = "button2" class ="button-xsmall pure-button"><i class="fa fa-star"></i> AMERICANIZE</button></div>';

var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/

$(document).ready(function() {
    $('#button1').click(function() {
        var iName = inName(bio.name) || function(){};
        $('#name').html(iName);
        $('#side-name').html(iName);

        var iPhone = "00-1-" + bio.contacts.mobile;
        var iformattedMobile = HTMLmobile.replace(/\%data\%/g, iPhone);
        $('.phone').html(iformattedMobile);
    });
    $('#button2').click(function() {
        var iName = bio.name || function(){};
        $('#name').html(iName);
        $('#side-name').html(iName);

        var formattedMobile = HTMLmobile.replace(/\%data\%/g, bio.contacts.mobile);
        $('.phone').html(formattedMobile);
    })
});


/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
    clickLocations.push(
        {
            x: x,
            y: y
        }
    );
    console.log('x location: ' + x + '; y location: ' + y);
}


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    // This next line makes `map` a new Google Map JavaScript Object and attaches it to
    // <div id="map">, which is appended as part of an exercise late in the course.
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    // Adjusted color of the map to a more monochrome look
    map.set('styles',[
        {
            "stylers": [
              { "saturation": -100 }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
              { "saturation": -100 },
              { "lightness": -46 }
            ]
        }
    ]);

    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array
        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
            locations.push(work.jobs[job].location);
        }
        //console.log(locations);
        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.formatted_address;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
          map: map,
          position: placeData.geometry.location,
          title: name,
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        // Next step, try formatting the content of the infoWindow,
        // which is simply a string that contains the overlay's HTML.
        //Right now it's set to name, which is just the name of the city.
        //Try learning some HTML and CSS to make the overlay really stand out!
        console.log(name)
        console.log(locationDescriptions.textfield(name));

        var contentString = '<div id="content">'+
            '<div id="siteNotice">' +
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + name + '</h1>'+
            '<div id="bodyContent">'+
            '<p><b>' + name + '</b>,'+ locationDescriptions.textfield(name)[0] + '</p>'+
            '<p>Attribution: '+ name + ', '+
            '<a href="'+ locationDescriptions.textfield(name)[1] + '">'+ locationDescriptions.textfield(name)[1] +'</a> '+
            '</div>'+
            '</div>';

        var infoWindow = new google.maps.InfoWindow({
            content: contentString
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map,marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    //callback(results, status) makes sure the search returned results for a location.
    //If so, it creates a new map marker for that location.
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          createMapMarker(results[0]);
        }
    }

    //pinPoster(locations) takes in the array of locations created by locationFinder()
    //and fires off Google place searches for each location
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {

            // the search request object
            var request = {
              query: locations[place]
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

      // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
}

//Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //  Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
