const academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

function getMembersByName(members, startsWith) {
  let matchingMembers = [];

  for (const member of members) {
    if (member.name.startsWith(startsWith)) {
      matchingMembers.push(member);
    }
  }
  return matchingMembers;
}

let matchingMembers = getMembersByName(academyMembers, "Bob");
console.log(matchingMembers);
