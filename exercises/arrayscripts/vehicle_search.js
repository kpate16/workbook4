let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",

    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

let resultArray1 = [];
let resultArray2 = [];
let resultArray3 = [];
let resultArray4 = [];
for (const vehicle of vehicles) {
  //    vehicle= {
  //         color: "White",
  //         type: "Pickup Truck",
  //         registrationState: "TX",
  //         licenseNo: "CAC-7YT",
  //         registrationExpires: new Date("1-31-2023"),
  //         capacity: 5,
  //       },
  if (vehicle.color === "Red") {
    resultArray1.push(vehicle);
  }
  if (vehicle.registrationExpires < new Date()) {
    resultArray2.push(vehicle);
  }

  if (vehicle.capacity >= 6) {
    resultArray3.push(vehicle);
  }
  if (vehicle.licenseNo.endsWith("222")) {
    resultArray4.push(vehicle);
  }
}
function printVehicles(message, vehiclelist) {
  console.log("\n\n####" + message);
  let space = "  ";
  console.log(
    "color" +
      space.padStart(20 - "color".length) +
      "type" +
      space.padStart(20 - "type".length) +
      "registrationState" +
      space.padStart(20 - "registrationState".length) +
      "licenseNo" +
      space.padStart(20 - "licenseNo".length) +
      "registrationExpires" +
      space.padStart(20 - "registrationExpires".length) +
      "capacity"
  );
  console.log(space.padStart(120, "-"));

  for (const vehicle1 of vehiclelist) {
    console.log(
      vehicle1.color +
        space.padStart(20 - vehicle1.color.length) +
        vehicle1.type +
        space.padStart(20 - vehicle1.type.length) +
        vehicle1.registrationState +
        space.padStart(20 - vehicle1.registrationState.length) +
        vehicle1.licenseNo +
        space.padStart(20 - vehicle1.licenseNo.length) +
        vehicle1.registrationExpires.toLocaleDateString("en-US") +
        space.padStart(
          20 - vehicle1.registrationExpires.toLocaleDateString("en-US").length
        ) +
        vehicle1.capacity
    );
  }
}
printVehicles("Which vehicles are RED?", resultArray1);
printVehicles(
  "Which vehicles have registrations that are expired??",
  resultArray2
);
printVehicles("// Which vehicles that hold at least 6 people", resultArray3);
printVehicles(
  "Which vehicles have license plates that end with 222?",
  resultArray4
);
