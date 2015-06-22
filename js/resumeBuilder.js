// var email =  "calsaviour@udacity.com";
// var newEmail = email.replace("udacity","gmail");

// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "My name is Calvin Low and I am AWESOME!"

// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

// $("#main").append(funThoughts);

var displayWork = function(_work){
	for(index in _work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",_work.jobs[index].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%",_work.jobs[index].title);
		$(".work-entry:last").append(formattedWorkEmployer + " " + formattedWorkTitle);


		var formattedDates = HTMLworkDates.replace("%data%",_work.jobs[index].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%",_work.jobs[index].location);
		$('.work-entry:last').append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%",_work.jobs[index].description);
		$('.work-entry:last').append(formattedWorkDescription);
	}
};

// var locationizer = function (_work) {
//     var locations = [];
//     for(index in _work.jobs){
//         locations.push(_work.jobs[index].location);
//     }
    
//     return locations;
// }

var logClicks = function(x,y){
	console.log("x location : " + x);
	console.log("y location : " + y);
};

var inName = function(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

var work = {
	"jobs":[
		{
			"employer":"SeeSharp Solutions Sdn Bhd",
			"title":"Software Engineer",
			"location":"Kuala Lumpur",
			"dates":"November 2014 - May 2015",
			"description":"Building / hacking cool stuffs. Inspired to use technology to improve the lives of others"
		},
		{
			"employer":"CIMB Investment Bank",
			"title":"Management Trainee",
			"location":"Kuala Lumpur",
			"dates":"May 2013 - September 2014",
			"description":"Getting my hands dirty with Finance"
		},
		{
			"employer":"Manulife Technology and Services",
			"title":"Analyst Programmer",
			"location":"Kuala Lumpur",
			"dates":"May 2011 - April 2013",
			"description":"Build web services, reporting application, mobile applications"
		}
	]
};


var projects = {
	"project":[
		{
			"title":"AngularJS with C# Project",
			"dates":"May 2015",
			"description":"Build the fontend using AngularJS and restful api using C#",
			"images":[]
		},
		{
			"title":"Social Network using Ruby on Rails",
			"dates":"July 2014",
			"description":"Followed Michael Hartl's tutorial on RoR",
			"images":[]
		},
		{
			"title":"Android and IOS",
			"dates":"Present and Beyond",
			"description":"Exploring the Android and IOS Apis",
			"images":[]
		}
	]
};

projects.display = function(){
	for(p in projects.project){	
		$('#projects').append(HTMLprojectStart);
		
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[p].title);
		$('.project-entry:last').append(formattedProjectTitle);

		var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.project[p].dates);
		$('.project-entry:last').append(formattedProjectDate);		

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[p].description);
		$('.project-entry:last').append(formattedProjectDescription);

		if(projects.project[p].images.length > 0){
			for(image in projects.project[p].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.project[p].images[image]);
				$('.project-entry:last').append(formattedImage);

			}
		}

	}
}

// var skills = ['Rails','CSS HTML JS','C#','Java','Objective C','AngularJS','Ocaml']
var skills = ['Bounty Hunter','Saving the world','Wants to run a NGO']
var bio = {
	"name":"Calvin Low",
	"role":"Full Stack Developer",
	"contact_info":{
		"mobile":"+6016-4113660",
		"email":"calsaviour@gmail.com",
		"github":"calsaviour",
		"twitter":"calsaviour",
		"location":"Kuala Lumpur"
	},
	"picture_URL":"images/me.jpg",
	"welcome_message":"Hey you found me!",
	"skills": skills
};

var education ={
	"schools":[
		{
			"name":"Multimedia University",
			"location":"Kuala Lumpur",
			"degree":"Bachelor",
			"major":["Finance"],
			"minor":"Computer Science",
			"graduation":"2015"
		}
	],
	"onlineCourses":[
		{
			"title":"JavaScript Basics",
			"school":"Udacity",
			"dates":2015,
			"url":""
		},
		{
			"title":"How to use Git and Github",
			"school":"Udacity",
			"dates":2015,
			"url":""
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.picture_URL);
$("#header").append(formattedBioPic);

var formattedWelcomMessage = HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
$("#header").append(formattedWelcomMessage);

$("#main").append(work.current_position);

var formattedMobile = HTMLmobile.replace("%data%",bio.contact_info.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contact_info.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact_info.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%",bio.contact_info.github);
$("#topContacts").append(formattedGithub);


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = "";
	bio.skills.forEach(function( skill ) {
	  	formattedSkill = HTMLskills.replace("%data%",skill);
		$('#skills').append(formattedSkill);
	});
}


$('#main').append(internationalizeButton);

// add map
$("#mapDiv").append(googleMap);

displayWork(work);
projects.display();




