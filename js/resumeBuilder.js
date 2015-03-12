var bio = {
    "name" : "Thomas Pushpathadam",
    "role" : "Totally Fictional Role",
    "contacts": {
        "mobile": "123-456-7899",
        "email": "tom@pushpathadam.com",
        "github": "pushpathadam",
        "twitter": "pushpathadam",
        "location": "Encino"
    },
    "welcomeMessage": "Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.",
    "skills": [
        "empowerment", "visualization", "synergization", "pontification"
    ],
    "biopic": "images/MoustacheCircle.png",
    "display": function () {
        $("#headerContent").prepend(HTMLskillsStart);

        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#headerContent").prepend(formattedWelcome);


        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#headerContent").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#headerContent").prepend(formattedName);

        var formattedBiopic =  HTMLbioPic.replace("%data%", bio.biopic);
            $("#headerContent").prepend(formattedBiopic);

        if (bio.skills.length > 0) {
            for (skill in bio.skills) {
                var formattedHTMLskills = HTMLskills.replace("%data%",bio.skills[skill].toUpperCase());
                $("#skills").append(formattedHTMLskills);
            }
        };

        //Add contact info to side bar
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedSideHeaderName = HTMLsideHeaderName.replace("%data%", bio.name);

        var formattedMobile = HTMLmobile.replace(/\%data\%/g, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(/\%data\%/g,  bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace(/\%data\%/g,  bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace(/\%data\%/g,  bio.contacts.github);
        var formattedLocation =  HTMLlocation.replace(/\%data\%/g,  bio.contacts.location);

        //Add contact info to sidebar menu
        $("#menu .pure-menu").prepend(formattedSideHeaderName);
        $("#list1").append(formattedMobile);
        $("#list1").append(formattedEmail);
        $("#list1").append(formattedTwitter);
        $("#list1").append(formattedGithub);
        $("#list1").append(formattedLocation);

        //Add contact info to footer

        $("#footerContacts").prepend(formattedGithub);
        $("#footerContacts").prepend(formattedTwitter);
        $("#footerContacts").prepend(formattedEmail);
        $("#footerContacts").prepend(formattedMobile);
    }
};

bio.display();

var work = {
    "jobs": [
        {
            "employer": "iLogic",
            "title": "Chief Procrastinator",
            "dates": "2000-13",
            "location": "Los Angeles, CA",
            "description": "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI."
        },
        {
            "employer": "ChatDrift",
            "title": "Minion",
            "dates": "1996-2000",
            "location": "Palo Alto, CA",
            "description": "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions."
        }
    ],
    "display" : function() {
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
};

work.display();

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
          "title": "Table",
          "dates": "2017",
          "description": "Listicle swag meh, pop-up polaroid chambray stumptown. Gentrify sustainable viral migas hoodie, biodiesel swag. Tumblr aesthetic taxidermy meditation. Scenester Bushwick disrupt ennui Truffaut, pork belly plaid listicle Tumblr fanny pack. Migas street art Williamsburg flexitarian, stumptown typewriter retro fixie Carles cray tousled synth chillwave. Wolf typewriter iPhone, blog Portland beard American Apparel tofu umami selvage shabby chic High Life Odd Future heirloom ugh. Pork belly keffiyeh typewriter chillwave, master cleanse mustache kogi.",
          "images": ["images/DSC_0009.jpg"]
        },
        {
          "title": "Bed",
          "dates": "2016",
          "description": "Listicle swag meh, pop-up polaroid chambray stumptown. Gentrify sustainable viral migas hoodie, biodiesel swag. Tumblr aesthetic taxidermy meditation. Scenester Bushwick disrupt ennui Truffaut, pork belly plaid listicle Tumblr fanny pack. Migas street art Williamsburg flexitarian, stumptown typewriter retro fixie Carles cray tousled synth chillwave. Wolf typewriter iPhone, blog Portland beard American Apparel tofu umami selvage shabby chic High Life Odd Future heirloom ugh. Pork belly keffiyeh typewriter chillwave, master cleanse mustache kogi.",
          "images": ["images/DSC_0013.jpg"]
        }
    ],
    "display": function () {
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

  projects.display();

var education = {
    "schools":[
        {
            "name": "Tamu",
            "location": "College Station, TX",
            "degree": "MS Visualization Sciences",
            "majors": ["Visualization"],
            "dates": "1996",
        },
        {
            "name": "Mc Hill",
            "location": "Montreal Canada",
            "degree": "B Destruction",
            "majors": ["Destruction"],
            "dates": "1992",
        }
      ],
      "onlineCourses":[
        {
            "title": "Certificate in Bee Keeping",
            "school": "Center for Apoidia Research",
            "dates": "2015",
            "url": "www.keepbeesfree.com"
        },
        {
            "title": "Certificate in Chin-Scratching ",
            "school": "Ecole Polytechnique Normale Superier",
            "dates": "2014",
            "url": "www.polynormsup.edu"
        }
    ],
    "display": function () {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            var combinedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

            $(".education-entry:last").append(combinedSchoolNameDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            if (education.schools[school].majors.length > 0) {
                for (major in education.schools[school].majors) {
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
                    $(".education-entry:last").append(formattedSchoolMajor);
                }
            }
        };

        $(".education-entry:last").append(HTMLonlineClasses);

        for (course in education.onlineCourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
            var combinedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(combinedOnlineTitleSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

education.display();

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
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() + "&nbsp";
    return name[0] + name[1];
};

//inName(bio.name);

$("#list3").append(internationalizeButton);
$("#list3").append(americanizeButton);

$("#mapDiv").append(googleMap);
