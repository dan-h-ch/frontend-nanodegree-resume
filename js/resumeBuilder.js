var leftNav = {
  "nav": [
    {
      "number" : "00",
      "text" : "Top",
      "link" : "#main"
    },
    {
      "number" : "01",
      "text" : "Projects",
      "link" : "#project-start"
    },
    {
      "number" : "02",
      "text" : "Education",
      "link" : "#education-start"
    },
    {
      "number" : "03",
      "text" : "Experience",
      "link" : "#experience-start"
    },
    {
      "number" : "04",
      "text" : "Email",
      "link" : "mailto:chang.daniel@gmail.com?Subject=Let&#39s%20talk!"
    }

  ]
}

var bio = {
  "name" : "Daniel Chang",
  "role" : "Web Developer",
  "welcomeMessage" : "Welcome!",
  "skills" : [
    {
      "value" : "Javascript",
      "icon" : "images/js_200x200.png"
    },
    {
      "value" : "HTML",
      "icon" : "images/html_512x512.png"
    },
    {
      "value" : "CSS",
      "icon" : "images/css_24x24.png"
    },
    {
      "value" : "SQL",
      "icon" : "images/sql_128x128.png"
    },
    {
      "value" : "Ruby",
      "icon" : "images/ruby_995x996.png"
    },
    {
      "value" : "R/R Studio",
      "icon" : "images/r_64x64.png"
    }
  ],
  "contacts" : [
    {
      "type" : "email",
      "value" : "chang.daniel@gmail.com",
      "link" : "mailto:chang.daniel@gmail.com?Subject=Let&#39s%20talk!",
      "icon" : "images/mail_24x24.png"
    },
    {
      "type" : "phone",
      "value" : "714 263 6819",
      "link" : "",
      "icon" : "images/phone_24x24.png"
    },
    {
      "type" : "linkedin",
      "value" : "linkedin.com/in/danielhchang",
      "link" : "https://www.linkedin.com/in/danielhchang",
      "icon" : "images/linkedin_24x24.png"
    },
    {
      "type" : "github",
      "value" : "github.com/dan-h-ch",
      "link" : "https://github.com/dan-h-ch",
      "icon" : "images/github_24x24.png"
    }
  ]
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
      "id" : 0,
      "title" : "Sr Live Operations Analyst",
      "link" : "http://www.mz.com",
      "employer" : "Machine Zone",
      "dates" : "July 2014  to Mar 2016",
      "location" : "Palo Alto, CA",
      "description" : [
        "Guide and implement targeted events tool to optimize value and LTV of customer audience along with increase safety of operation",
        "Establish post acquisition funnel to increase conversion rates and reduce time to step up conversion",
        "Establish & lead a 24/7 live operations team tasked with maximizing hour by hour operations for top grossing mobile game, Game of War",
        "Split test and analyze various events and sales to determine best action for driving specific KPI among specific customer audience"
      ],
      "popup" : "No 1 mobile game publisher of Game of War and Mobile Strike... click for more info."
    },
    {
      "id" : 1,
      "title" : "Country Manager",
      "link" : "http://www.gamigo.com",
      "employer" : "gamigo Inc",
      "dates" : "Mar 2013 to May 2014",
      "location" : "San Francisco, CA",
      "description" : [
        "Establish San Francisco office for gamigo Inc; including set up of lease agreement, office infrastructure, and HR policies",
        "Oversee the product and team migration from Outspark to gamigo Inc post acquisition deal",
        "Lead live ops team in improving customer lifetime value via retention and monetization activities"
      ],
      "popup" : "US subsidiary of top German game publisher... click for more info."
    },
    {
      "id" : 2,
      "title" : "Director of Product Management & Sales Operation",
      "link" : "",
      "employer" : "Outspark Inc",
      "dates" : "Dec 2010 to Mar 2013",
      "location" : "San Francisco, CA",
      "description" : [
        "Plan, project lead, and bring into production automated CRM program to aimed at improving marketing funnel and lifetime value of customers",
        "SQL queries to evaluate marketing partner performance at multiple checkpoints along funnel"
      ],
      "popup" : "Acquired by gamigo Inc Mar 2013."
    }
  ]
}

var education = {
  "schools" : [
    {
      "name" : "University of California, Berkeley",
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

// $("#main").append(internationalizeButton)

function inName(str) {
  var words = str.split(" ");
  words[1] = words[1].toUpperCase();
  return words.join(" ");
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// $("#name").prepend(formattedRole);
$("#name").prepend(formattedName);

nav.display = function() {
  for (item in leftNav.nav) {
    var formattedNavItem = HTMLnavItem.replace("%num%", leftNav.nav[item].number);
    formattedNavItem = formattedNavItem.replace("%text%", leftNav.nav[item].text);
    formattedNavItem = formattedNavItem.replace("%link%", leftNav.nav[item].link);
    $("#nav-list").append(formattedNavItem);
  }
}

skills.display = function() {
  if (bio.skills.length > 0) {
    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill].value);
      formattedSkill = formattedSkill.replace("%icon%", bio.skills[skill].icon);
      $("#skills-list").append(formattedSkill);
    }
  }
};

contacts.display = function() {
  if (bio.contacts.length > 0) {
    for (contact in bio.contacts) {
      if (bio.contacts[contact].link === "") {
        var formattedContact = HTMLcontact.replace("%icon%", bio.contacts[contact].icon);
        formattedContact = formattedContact.replace("%value%", bio.contacts[contact].value);
      } else {
        var formattedContact = HTMLcontactLink.replace("%icon%", bio.contacts[contact].icon);
        formattedContact = formattedContact.replace("%value%", bio.contacts[contact].value);
        formattedContact = formattedContact.replace("%link%", bio.contacts[contact].link);
      }

      $("#contact-list").append(formattedContact);
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
    var EducationTop = formattedName + formattedDates;
    EducationTop = HTMLschoolTopRow.replace("%data%", EducationTop);
    var EducationRest = formattedDegree + formattedMajor + formattedLocation;
    EducationRest = HTMLschoolRest.replace("%data%", EducationRest)
    var EducationAll = EducationTop + EducationRest;
    $(".education-entry:last").append(EducationAll);
  }
};

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var workId = "work-" + work.jobs[job].id
    if (work.jobs[job].link === "") {
      var formattedEmployer = HTMLworkEmployer.replace("%workId%", workId);
      formattedEmployer = formattedEmployer.replace("%data%", work.jobs[job].employer);
    } else {
      var formattedEmployer = HTMLworkEmployerLink.replace("%workId%", workId);
      formattedEmployer = formattedEmployer.replace("%link%", work.jobs[job].link).replace("%data%", work.jobs[job].employer);
    }
    var formattedPopup = HTMLworkPopup.replace("%id%", work.jobs[job].id).replace("%data%", work.jobs[job].popup);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedList = ""
    for (var n = 0; n < work.jobs[job].description.length; n++) {
      formattedList += HTMLworkList.replace("%data%",work.jobs[job].description[n]);
    }
    var formattedDescription = HTMLworkDescription.replace("%data%", formattedList);
    var workTopRow = formattedEmployer + formattedLocation;

    workTopRow = HTMLworkTopRow.replace("%data%", workTopRow);
    var workSecondRow = formattedTitle + formattedDates;
    workSecondRow = HTMLworkSecondRow.replace("%data%", workSecondRow);
    var workRest = formattedDescription;
    workRest = HTMLworkRest.replace("%data%", workRest);
    var workAll = workTopRow + workSecondRow + workRest;

    $(".work-entry:last").append(workAll);
    $("#" + workId).append(formattedPopup);
  };
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

nav.display();
education.display();
projects.display();
work.display();
skills.display();
contacts.display();
