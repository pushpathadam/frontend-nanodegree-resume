var name = "Thomas Pushpathadam";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Design/Front-End Dev/Analytics";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
