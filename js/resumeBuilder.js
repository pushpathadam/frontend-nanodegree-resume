var bio = {
  "name" : "Thomas Pushpathadam",
  "role" : "Fictional Role",
  "contacts": {
    "mobile": "123-456-7899",
    "email": "tom@pushpathadam.com",
    "github": "pushpathadam",
    "twitter": "@pushpathadam",
    "location": "Encino"
  },
  "welcomeMessage": "Web Designer-Analyst, Fx-Artist, Dabbler in Architecture & Furniture making, Father, Husband. I read fast, I learn fast, I get sh#t done.",
  "skills": [
      "breathing","eating", "drinking", "you get the picture"
      ],
  "biopic": "images/fry.jpg"
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
$("#topContacts").prepend(formattedGeneric);

var work = {
  "jobs": [
    {
      "employer": "Acme4.0",
      "title": "Boss",
      "dates": "July 2013",
      "location": "Los Angeles, CA",
      "description": "bon-vivant"
    },
    {
      "employer": "Acme3.0",
      "title": "Minion",
      "dates": "August 1992",
      "location": "Burlingame, CA",
      "description": "Eat, drink, repeat cycle"
    },
    {
      "employer": "Acme2.0",
      "title": "Minion",
      "dates": "August 1992",
      "location": "Agra, India",
      "description": "Eat, drink, repeat cycle"
    },
    {
      "employer": "Acme1.0",
      "title": "Minion",
      "dates": "August 1992",
      "location": "Ottawa, Canada",
      "description": "Eat, drink, repeat cycle"
    }
  ]
}

function displayWork() {
  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    //console.log(formattedEmployer);
  }
}
displayWork();

function locationizer(work_obj){
    var workLocations = [];
    for (job in work_obj.jobs){
      console.log(work_obj.jobs[job].location);
      workLocations.push(work_obj.jobs[job].location);
    }
    return workLocations;
};

console.log(locationizer(work));




var projects = {
  "projects":[
    {
    "title": "something",
    "dates": "2016",
    "description": "something i did",
    "images": ["images/fry.jpg","images/fry.jpg"]
    },
    {
    "title": "something2",
    "dates": "2017",
    "description": "something i did later",
    "images": ["images/fry.jpg","images/fry.jpg"]
    }
  ]
};

projects.display = function () {
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    };
  }
}
projects.display();

var education = {
  "schools":[
    {
      "name": "Texas A&M",
      "location": "College Station, TX",
      "degree": "MS Visualization Sciences",
      "majors": ["Visualization"],
      "dates": "1996",
    },
    {
      "name": "Mc Gill",
      "location": "Montreal Canada",
      "degree": "B Architecture",
      "majors": ["Architecture"],
      "dates": "1992",
    }
  ],
  "onlineCourses":[
    {
      "title": "certificate in ",
      "school": "institute of",
      "dates": "Feb 2014",
      "url": "www.something.com"
    },
    {
      "title": "certificate in ",
      "school": "institute of",
      "dates": "July 2014",
      "url": "www.something.com"
    }
  ]
};


education.display = function () {
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    if (education.schools[school].majors.length > 0) {
      for (major in education.schools[school].majors) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
        $(".project-entry:last").append(formattedSchoolMajor);
      }
    };

    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    };
  };

  $(".education-entry:last").append(HTMLonlineClasses);

  for (course in education.onlineCourses){

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
    $(".education-entry:last").append(formattedOnlineTitle);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedOnlineURL);

  }
}

education.display();


function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    console.log(name);
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + name[1];
};

//inName(bio.name);

$("#header").prepend(internationalizeButton);

$("#mapDiv").append(googleMap);

//console.log(formattedTwitter)
