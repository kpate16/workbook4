let kids = ["Natalie", "Brittany", "Zachary"];

for (let index = 0; index < kids.length; index++) {
  const kid = kids[index];
  console.log(kid);
}

console.log("================");
for (const kid of kids) {
  console.log(kid);
}