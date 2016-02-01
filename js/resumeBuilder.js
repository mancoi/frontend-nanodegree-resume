/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
	"jobs" : [
		{
			"employer" : "Whaat Whaat",
			"title" : "TABASD",
			"location" : "Tokyo",
			"dates" : "28/09/8888",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae itaque quam voluptas error, exercitationem dolorum aspernatur, placeat eos porro vel ipsam nulla velit impedit voluptatibus, doloremque dicta doloribus nesciunt odio minima corporis eligendi. Aspernatur, voluptates. Veniam laborum, accusamus voluptatibus temporibus vero illo qui maiores tenetur molestias harum expedita asperiores vel dolorem cumque, odio officiis. Nobis reprehenderit, enim perspiciatis culpa quos libero laboriosam. Labore facere architecto vel unde nisi molestias voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque velit voluptatum, nulla illum excepturi, quasi, voluptas possimus tempore maxime ex sapiente tenetur odit quam nostrum minus animi. Tempora earum quam nemo dolorum ratione temporibus dolor, reprehenderit vitae dolores fugiat aperiam ducimus, est in non culpa velit? Quos blanditiis fuga accusantium cupiditate laboriosam maxime odio dolorum, ipsum eveniet eos vero incidunt provident impedit consequatur hic fugiat, ex amet error? Debitis, maiores?"
		},
		{
			"employer" : "HEEEEl",
			"title" : "BAGDDF",
			"location" : "Osaka",
			"dates" : "15/01/4513",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, minima. Voluptate aut inventore totam excepturi dicta, accusamus tenetur odit voluptatibus modi, voluptates perspiciatis vero ipsa, nulla facere eum tempora atque reiciendis quo qui consectetur fugiat. Quam enim facere tenetur deleniti molestias, odio! Ducimus deleniti, assumenda atque, dolore adipisci dolores earum ea quae odio exercitationem accusamus dolorem quos commodi nisi repudiandae, nihil deserunt. Doloribus, beatae, harum. Quo blanditiis reiciendis eius magni exercitationem, ullam harum, ut nesciunt neque perferendis, accusantium aspernatur quidem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae cupiditate quidem cum, dolore similique delectus ad enim cumque ex. Voluptatem iusto quasi nisi eligendi dolores incidunt architecto voluptas inventore nulla eaque autem nostrum, ullam quibusdam accusantium iste quam doloribus magni aliquid blanditiis."
		}
	]
}
var projects = {
	"projects" : [
		{
			"title" : "Lorem ipsum dolor.",
			"dates" : "10/98/4941",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vero, quo voluptates. Quaerat minus quisquam pariatur eum enim expedita ducimus veritatis excepturi nam cum fugiat officiis sed optio ullam, molestiae ratione ipsa inventore fugit dolorum aperiam. Dicta ex corporis modi nisi, eligendi voluptatum similique culpa, sunt nesciunt adipisci sint facilis quaerat enim perferendis aliquid maxime, impedit suscipit dolores expedita ad atque quo esse. Dolorem vero dolorum dicta rerum ducimus quo rem laboriosam, excepturi quas sequi modi praesentium placeat dignissimos quos quae soluta, suscipit ratione earum minus debitis commodi quisquam inventore? Iusto veritatis distinctio voluptatum beatae, dignissimos excepturi dolores repudiandae accusantium?",
			"images" : ["images/350.jpg", "images/350.jpg", "images/350.jpg"]
		},
		{
			"title" : "Lorem ipsum.",
			"dates" : "15/12/9785",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam maiores deleniti eligendi quod ea, iste harum maxime accusantium esse repudiandae voluptas ipsa assumenda adipisci quo omnis. Dolor qui, harum praesentium sed commodi sapiente quae fugiat tempora magnam temporibus! Velit eos reiciendis consequatur doloribus enim nemo culpa cum libero similique accusamus cumque officiis, et, minus labore hic iusto voluptate voluptatem alias dolorem. Nesciunt doloribus nihil quaerat officiis temporibus repudiandae. Ipsam adipisci odit eveniet voluptate tempore voluptatem dolorum, consequuntur impedit iste officia nemo soluta perspiciatis obcaecati nisi voluptas sapiente debitis amet facere!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minus odio saepe dolor? Id, deserunt explicabo repudiandae excepturi maxime magni, eum voluptas eveniet tempore eius sunt molestias et sequi esse!",
			"images" : ["images/350.jpg", "images/350.jpg"]
		}
	]
}
var bio = {
	"name" : "Pham Man",
	"role" : "Student",
	"welcomeMessage" : "Can I do something for you?",
	"contacts" : {
		"email" : "caoman6@gmail.com",
		"mobile" : "8411111111",
		"github" : "mancoi",
		"location" : "Ho Chi Minh"
		},
	"skills" : ["HTML5", "CSS3", "Javascript", "C++", "OOP"],
	"pic" : "images/fry.jpg"
}
var education = {
	"schools" : [
		{
			"name" : "Open University",
			"location" : "Ho Chi Minh",
			"degree" : "Computer Scientist",
			"major" : ["CS"],
			"dates" : 2014,
			"url" : "ou.edu.vn"
		},
				{
			"name" : "Nguyen Chi Thanh High School",
			"location" : "Ho Chi Minh",
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

var formattedName, formattedRole, formattedEmail, formattedMobile, formattedbioPic, formattedSkills, formattedWelcome, formattedContact, formattedGit, fotmattedLocation;

formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
formattedbioPic = HTMLbioPic.replace("%data%", bio.pic);
formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGit);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedbioPic);
$("#header").append(formattedWelcome);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


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

function displayWork()
{
		for (jobdetail in work.jobs)
	{

		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer, formattedWorkTitle, formattedDate, formattedLocation, formattedDescription;
		if (work.jobs.hasOwnProperty(jobdetail))
		{

			formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobdetail].employer);
			formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobdetail].title)
			formattedDate = HTMLworkDates.replace("%data%", work.jobs[jobdetail].dates);
			formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobdetail].location);
			formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobdetail].description);
			var formattedEmplyreTitle = formattedWorkEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmplyreTitle);
			$(".work-entry:last").append(formattedDate);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}
displayWork();

function inName(){
	var Name = bio.name;
	Name = bio.name.trim().split(' ');
	Name[0] = Name[0].slice(0, 1).toUpperCase() + Name[0].slice(1).toLowerCase();
	Name[1] = Name[1].toUpperCase();
	Name = Name.join(' ');
	return Name;
}

$("#main").append(internationalizeButton);

projects.display = function () {
	for (project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle, formattedDate, formattedDescription, formattedImage;
		formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		formattedDate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDescription);
		for (img in projects.projects[project].images)
		{
			formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}
projects.display();

$("#mapDiv").append(googleMap);