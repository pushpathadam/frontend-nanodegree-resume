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
  "biopic": "images/fry.jpg",
  "displayBio": function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedBiopic =  HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);


    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    var formattedLocation =  HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").prepend(formattedLocation);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").prepend(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").prepend(formattedTwitter);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").prepend(formattedEmail);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").prepend(formattedMobile);

    // var formattedGeneric = '<li class="flex-item"><span class="orange-text">' + 'crap' + '</span><span class="white-text">' + 'crap'+ '</span></li>';
    //$("#topContacts").prepend(formattedGeneric);
  }
};

bio.displayBio();

var work = {
  "jobs": [
    {
      "employer": "Acme4.0",
      "title": "Boss",
      "dates": "2000-13",
      "location": "Los Angeles, CA",
      "description": "bon-vivant"
    },
    {
      "employer": "Acme3.0",
      "title": "Minion",
      "dates": "1996-2000",
      "location": "Palo Alto, CA",
      "description": "Eat, drink, repeat cycle"
    },
  ],
  "displayWork" : function(){
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
    }
  }
}

work.displayWork();

function locationizer(work_obj){
    var workLocations = [];
    for (job in work_obj.jobs){
      //console.log(work_obj.jobs[job].location);
      workLocations.push(work_obj.jobs[job].location);
    }
    return workLocations;
};

//console.log(locationizer(work));

var projects = {
  "projects":[
    {
    "title": "something",
    "dates": "2017",
    "description": "something i did",
    "images": ["images/fry.jpg","images/fry.jpg"]
    },
    {
    "title": "something2",
    "dates": "2016",
    "description": "something i did later",
    "images": ["images/fry.jpg","images/fry.jpg"]
    }
  ],
  "displayProjects": function () {
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
};

projects.displayProjects();

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
      "dates": "2014",
      "url": "www.something.com"
    },
    {
      "title": "certificate in ",
      "school": "institute of",
      "dates": "2014",
      "url": "www.something.com"
    }
  ],
  "displayEducation": function () {
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
};

education.displayEducation();

var locationDescriptions = {
  "places" : [
    {
      "location":"Encino",
      "description": "Encino is an affluent neighborhood in the San Fernando Valley region of Los Angeles, California. Encino has three public and eight private schools, including two private high schools, and the community has been the home of many notable people. -Wikipedia",
      "attribution": "http://en.wikipedia.org/wiki/Encino,_Los_Angeles"

    },
    {
      "location": "Los Angeles, CA",
      "description": "Los Angeles, officially the City of Los Angeles, often known by its initials L.A., is a major city in California's Southern California region, approximately 342 miles south of San Francisco. Wikipedia",
      "attribution": "http://en.wikipedia.org/wiki/Los_Angeles"

    },
    {
      "location": "Palo Alto, CA",
      "description": "Palo Alto is a charter city located in the northwest corner of Santa Clara County, California, in the San Francisco Bay Area of the United States.",
      "attribution": "http://en.wikipedia.org/wiki/Palo_Alto,_California"

    },
    {
      "location":"College Station, TX",
      "description": "College Station is a city in Brazos County, Texas, situated in East Central Texas in the heart of the Brazos Valley. It is north from both Houston and Austin.",
      "attribution": "http://en.wikipedia.org/wiki/College_Station,_Texas"
    },
    {
      "location": "Montreal, QC, Canada",
      "description": "Montreal is a city in the Canadian province of Quebec. It is the largest city in the province, the second-largest in Canada and the 9th-largest in North America.",
      "attribution": "http://en.wikipedia.org/wiki/Montreal"
    }
  ],
  "textfield": function(place){
    for (var x in locationDescriptions.places) {
      // sloppy check that proper city name matches partial
      var tmpPlace = place.split(",")[0];
      var tmpCurrentPlace = (locationDescriptions.places[x].location).split(",")[0];
      if (tmpPlace === tmpCurrentPlace) {
        locationText = [ locationDescriptions.places[x].description, locationDescriptions.places[x].attribution ];
        return locationText;
      }
    };
  }
}

//console.log(locationDescriptions.textfield("Encino"));

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
