let ceo = 2200;
let manager = 1800;
let cto = 1800;
let developer = 1500;
let other = 1000;

function calculateSalary(role) {
  if (role === "ceo") {
    return ceo;
  } else if (role === "manager") {
    return manager;
  } else if (role === "cto") {
    return cto;
  } else if (role === "developer") {
    return developer;
  } else if (role === "other") {
    return other;
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log("ceo =>", ceoSalary);
console.log("manager =>", managerSalary);
console.log("cto =>", ctoSalary);
console.log("developer =>", developerSalary);
console.log("other =>", otherSalary);
