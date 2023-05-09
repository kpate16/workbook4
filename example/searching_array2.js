let teams = ["Red Sox", "Rangers", "Blue Jays",
 "Astros", "White Sox", "Rangers"];
let index = teams.indexOf("Rangers", 3);
if (index == -1)
 console.log("Item not found");
else
 console.log("Item at position: " + index);