/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
	"jobs" : [
		{
			"employer" : "Whaat Whaat",
			"title" : "TABASD",
			"location" : "No",
			"dates" : "No",
			"desciption" : "No"
		},
		{
			"employer" : "HEEEEl",
			"title" : "BAGDDF",
			"location" : "No",
			"dates" : "No",
			"desciption" : "No"
		}
	]
}
var projects = {
	"projects" : [
		{
			"title" : "No",
			"dates" : "No",
			"desciption" : "No",
			"images" : ["images/none.jpg"]
		},
		{
			"title" : "No",
			"dates" : "No",
			"desciption" : "No",
			"images" : ["images/none.jpg"]
		}
	]
}
var bio = {
	"name" : "Pham Cao Man",
	"role" : "Student",
	"welcomeMessage" : "Can I do something for you?",
	"contacts" : {
		"email" : "caoman6@gmail.com",
		"mobile" : "8411111111",
		"github" : "mancoi",
		"location" : "VN"
	},
	"skills" : ["HTML5", "CSS3", "Javascript", "C++", "OOP"]
}
var education = {
	"schools" : [
		{
			"name" : "Open University",
			"location" : "HCMC",
			"degree" : "Computer Scientist",
			"major" : ["CS"],
			"dates" : 2014,
			"url" : "ou.edu.vn"
		},
				{
			"name" : "Nguyen Chi Thanh High School",
			"location" : "HCMC",
			"degree" : "High School Graduated",
			"major" : ["No"],
			"dates" : 2014,
			"url" : "No"
		}
	],
	"onlinecourse" : [
		{
			"title" : "Javascript Basic",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title" : "How to use Git and GitHub",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		}
	]
}

if (bio.skills.length>0)
{
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0])
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1])
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2])
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3])
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[4])
	$("#skills").append(formattedSkills);
}

for (jobdetail in work.jobs)
{

	$("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer, formattedWorkTitle;
	if (work.jobs.hasOwnProperty(jobdetail)) {
		formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobdetail].employer);
			formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobdetail].title)
		var formattedEmplyreTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedEmplyreTitle);
	}
}