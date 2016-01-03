/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var awesomeThoughts = "I am Man and I am AWESOME"
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(awesomeThoughts);
console.log(funThoughts);

$("#main").append(funThoughts);*/

/*var formattedName, formattedRole;
formattedName = HTMLheaderName.replace("%data%", "PCM");
formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var name = "mAn coi";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var name = oldName.split(' ');
    name[0] = name[0].toLowerCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    finalName = name.join(" ");
    
    // Don't delete this line!
    return finalName;
};

$("#main").append(nameChanger(name));