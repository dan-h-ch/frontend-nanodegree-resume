
var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLcontact = '<li class="flex-item"><img class="contact-icon" src="%icon%"><span class="contact-text">%value%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskills = '<li class="flex-item"><img class="skill-icon" src="%icon%"><span class="skill-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployerLink = '<div class="name-text"><a href="%link%">%data%</a></div>';
var HTMLworkEmployer = '<div class="name-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkTitle = '<div class="position-text">%data%</div>';
var HTMLworkDates = '<div class="date-text">%data%</div></div>';
var HTMLworkDescription = '<p>%data%</p>';
var HTMLworkList = '<li>%data%</li>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<div>%data%</div>';
var HTMLprojectTitleLink = '<div><a href="%link%">%data%</a></div>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div class="name-text">%data%</div>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolDegree = '<div class="degree-text">%data%';
var HTMLschoolMajor = ' %data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

$(function(){
  $("#nav").hover(function(){
    $(this).animate({width:'250px'},400);
    $(".category-title").animate({"padding-left":"250px"},400);
    console.log($(window).width());
    if ($(window).width() < 1020) {
      $("#name").animate({"padding-left":"255px"},400);
      $("#lets-connect").animate({"padding-left":"255px"},400);
    } else {
      console.log("didn't move name & lets-connect")
    }

  }, function(){
    $(this).animate({width:'75px'},400);
    $(".category-title").animate({"padding-left":"75px"},400);
    $("#name").animate({"padding-left":"25%"},400);
    $("#lets-connect").animate({"padding-left":"25%"},400);
  }).trigger("load");
});

$(function(){
  $("#nav").css({ height: $(document).height()});
  $(window).resize(function(){
    $("#nav").css({ height: $(window).height()});
    $("#nav").css({ height: $(document).height()});
  });
});

// $("#main").click(function() {
// //Hide the menus if visible
// });


// function(){
//   $(this).animate({width:'75px'},400);
//   $(".category-title").animate({"padding-left":"75px"},400);
//   $("#name").animate({"padding-left":"25%"},400);
//   $("#name").animate({"padding-left":"25%"},400);
// }).trigger('mouseleave');
// });

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
  // your code goes here!
});
