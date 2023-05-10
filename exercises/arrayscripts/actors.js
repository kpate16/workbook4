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
// Who is the Academy Member whose ID is 187?

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

// Who has have been in at least 3 films?
let resultArray = [];
function getMembersIn3Films(members) {
  for (const member of members) {
    if (member.films.length >= 3) {
      resultArray.push(member.name);
    }
  }
  return resultArray;
}
console.log("Who has have been in at least 3 films");
let memberlist = getMembersIn3Films(academyMembers);
for (const memberName of memberlist) {
  console.log(memberName);
}
// Who has a name that starts with "Bob"?

let resultArray1 = [];
function getMemberStartswith(members) {
  for (const member of members) {
    if (member.name.startsWith("Bob")) {
      resultArray1.push(member.name);
    }
  }
  return resultArray1;
}
console.log("Who has a name that starts with Bob");
let list1 = getMemberStartswith(academyMembers);
for (const memberName of list1) {
  console.log(memberName);
}
// HARDER: Which Academy Members have been in a film that starts with "A"

let resultArray2 = [];
function getMemberFilmFilter(members) {
  for (const member of members) {

    // member ={
    //   memID: 142,
    //   name: "Sallie Smith",
    //   films: ["A Good Day", "A Better Day"],
    // },
    for (const filmname of member.films) {
      // filmname="A Good Day",
      if (filmname.startsWith("A")) {
        resultArray2.push(member.name);
          break;
      }
    }
  }
  return resultArray2;
}
console.log(
  "// HARDER: Which Academy Members have been in a film that starts with A"
);
let list2 = getMemberFilmFilter(academyMembers);
for (const memberName of list2) {
  console.log(memberName);
}
