//$("body").append("Thomas Pushpathadam");

var formattedName;
var formattedRole;
formattedName = HTMLheaderName.replace("%data%","Thomas Pushpathadam");
formattedRole = HTMLheaderRole.replace("%data%","Web Design, Front-End Dev, Analytics");
$("header").append(formattedName);
$("header").prepend(formattedRole);
console.log(formattedName)
