var bio = {
  "name" : "Thomas Pushpathadam",
  "role" : "Web Design Front-End Dev Analytics",
  "contacts": {
    "mobile": "323-761-9688",
    "email": "tom@verycleverdesign.com",
    "github": "pushpathadam",
    "twitter": "@pushpathadam",
    "location": "verycleverdesign.com",
  },
  "welcomeMessage": "Web Designer-Analyst, Fx-Artist, Dabbler in Architecture & Furniture making, Father, Husband. I read fast, I learn fast, I get sh#t done.",
  "skills": [
      "html5","css3", "google analytics", "python"
      ],
  "biopic": "images/fry.jpg",
//  "display": "function taking no parameters",
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedGeneric = '<li class="flex-item"><span class="orange-text">' + 'crap' + '</span><span class="white-text">' + 'crap'+ '</span></li>';
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation =  HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBiopic =  HTMLbioPic.replace("%data%", bio.biopic);var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedBiopic);
$("#header").append(formattedWelcome);
$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);
//$("#topContacts").prepend(formattedGeneric);

console.log(formattedTwitter)
