

var bio = {
  "name" : "Daniel Chang",
  "role" : "Web Developer",
  "contacts" : {
    "email" : "chang.daniel@gmail.com",
    "phone" : "714 263 6819",
    "location" : "San Jose, CA"
  },
  "pictureURL" : "images/fry.jpg",
  "welcomeMessage" : "Welcome!",
  "skills" : ["Ruby", "Javascript", "HTML", "CSS", "R"]
};

var projects = {
  "projects" : [
    {
      "title" : "danch.me",
      "link" : "http://danch.me",
      "role" : "lead developer",
      "dates" : "June 2016",
      "description" : "freaking awesome website!!!!"
    },
    {
      "title" : "2danch.me",
      "link" : "http://2danch.me",
      "role" : "2lead developer",
      "dates" : "June 2016",
      "description" : "222freaking awesome website!!!!"
    }
  ]
}

var work = {
  "jobs" : [
    {
      "title" : "Sr Live Ops Analyst",
      "link" : "http://www.mz.com",
      "employer" : "Machine Zone",
      "dates" : "July 2014  to Mar 2016",
      "location" : "Palo Alto, CA",
      "description" : "lormemasdfm"
    },
    {
      "title" : "Country Manager",
      "link" : "http://www.gamigo.com",
      "employer" : "gamigo Inc",
      "dates" : "Mar 2013 to May 2014",
      "location" : "San Francisco, CA",
      "description" : "lormemasdfm"
    },
    {
      "title" : "Director of Product & Sales",
      "link" : "",
      "employer" : "Outspark Inc",
      "dates" : "Dec 2010 to Mar 2013",
      "location" : "San Francisco, CA",
      "description" : "lormemasdfm"
    }
  ]
}

var education = {
  "schools" : [
    {
      "name" : "University of California",
      "degree" : "B.A.",
      "major" : "Applied Mathematics",
      "dates" : "Aug 2000 to Dec 2004",
      "location" : "Berkeley, CA"
    },
    {
      "name" : "Cupertino High School",
      "degree" : "General Education",
      "major" : "",
      "dates" : "Sep 1997 to May 2000",
      "location" : "Cupertino, CA"
    }
  ],
  "online courses" : [
    {
      "name" : "Udacity",
      "subject" : "Javascript"
    }
  ]
}

$("#main").append(internationalizeButton)

function inName(str) {
  var words = str.split(" ");
  words[1] = words[1].toUpperCase();
  return words.join(" ");
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

skills.display = function() {
  if (bio.skills.length > 0) {
    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    if (projects.projects[project].link === "") {
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    } else {
      var formattedProjectTitle = HTMLprojectTitleLink.replace("%link%", projects.projects[project].link).replace("%data%", projects.projects[project].title);
    }
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    var formattedProject = formattedProjectDates + formattedProjectTitle + formattedProjectDescription;
    $(".project-entry:last").append(formattedProject);
  };
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    if (education.schools[school].major != null) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    } else {
      var formattedMajor = "";
    }
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedEducation = formattedDates + formattedName + formattedLocation + formattedDegree + formattedMajor;
    $(".education-entry:last").append(formattedEducation);
  }
}

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    if (work.jobs[job].link === "") {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    } else {
      var formattedEmployer = HTMLworkEmployerLink.replace("%link%", work.jobs[job].link).replace("%data%", work.jobs[job].employer);
    }
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var fomrattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedEmployerTitle = formattedLocation + formattedEmployer + formattedDates + formattedTitle + fomrattedDescription;
    $(".work-entry:last").append(formattedEmployerTitle);
  };
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});


education.display();
projects.display();
work.display();
skills.display();


// $("#mapDiv").append(googleMap);
