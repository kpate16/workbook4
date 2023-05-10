let academyMembers = [
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

function getMemberById(members, memberId) {
  for (const member of members) {
    if (member.memID == memberId) {
      return member;
    }
  }
}

function printMemberToConsole(member) {
  return `The member with id: ${member.memID} is ${member.name} `;
}

let matchingMember = getMemberById(academyMembers, 187);
let message = printMemberToConsole(matchingMember);
console.log(message);
