
var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLnavStart = '<div id="nav"><ul id="nav-list"></ul><div>'
var HTMLnavItem = '<li><a href="%link%"><span>%num%</span>%text%</a></li>'

var HTMLcontact = '<li class="flex-item"><img class="contact-icon" src="%icon%"><span class="contact-text">%value%</span></li>';
var HTMLcontactLink = '<li class="flex-item"><a href="%link%"><img class="contact-icon" src="%icon%"><span class="contact-text">%value%</span></a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskills = '<li class="flex-item"><img class="skill-icon" src="%icon%"><span class="skill-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployerLink = '<div class="name-text" id="%workId%"><a href="%link%" target="_blank">%data%</a></div>';
var HTMLworkEmployer = '<div class="name-text" id="%workId%">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div></div>';
var HTMLworkTitle = '<div class="position-text">%data%</div>';
var HTMLworkDates = '<div class="date-text">%data%</div></div>';
var HTMLworkDescription = '<ul class="description-list">%data%</ul>';
var HTMLworkList = '<li>%data%</li>';
var HTMLworkPopup = '<p class="popup-description" id="work-%id%-popup">%data%</p>';
var HTMLworkTopRow = '<div class="top-row">%data%</div>'
var HTMLworkSecondRow = '<div class="second-row">%data%</div>'
var HTMLworkRest = '<div class="rest">%data%</div>'

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<div class="name-text">%data%</div>';
var HTMLprojectTitleLink = '<div class="name-text"><a href="%link%">%data%</a></div>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div class="name-text">%data%</div>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolDegree = '<div class="degree-text">%data%';
var HTMLschoolMajor = ' %data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolTopRow = '<div class="top-row">%data%</div>'
var HTMLschoolRest = '<div class="rest">%data%</div>'

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

$(window).scroll(function () {
  $("#nav-list").css("padding-top", $(window).scrollTop());
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

$(function(){
  var n = 0;
  $("#work-" + n).hover(function(){
    $("#work-" + n + "-popup").css("display","inline-block");
    console.log("#work-" + n);
  }, function(){
    $("#work-" + n + "-popup").hide();
  }).trigger("load");
});

$(function(){
  var n = 1;
  $("#work-" + n).hover(function(){
    $("#work-" + n + "-popup").css("display","inline-block");
    console.log("#work-" + n);
  }, function(){
    $("#work-" + n + "-popup").hide();
  }).trigger("load");
});

$(function(){
  var n = 2;
  $("#work-" + n).hover(function(){
    $("#work-" + n + "-popup").css("display","inline-block");
    console.log("#work-" + n);
  }, function(){
    $("#work-" + n + "-popup").hide();
  }).trigger("load");
});

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
