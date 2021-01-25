const { response } = require("express");
const fetch = require("node-fetch");
let api = "https://mul14.github.io/data/employees.json";

async function getEmployee() {
  let resData = await fetch(`${api}`);
  let responses = await resData.json();

  const salary = 15000000;
  let employeeSalary = responses.find((item) => {
    if (item.salary >= salary) {
      console.log(item.salary);
    }
  });
  console.log("\n");

  const city = "DKI Jakarta";
  let employeeCity = responses.filter((item) => {
    if (item.addresses[0].city === city) {
      console.log(item.addresses[0].city);
    }
  });
  console.log("\n");

  const dept = "Research and development";
  let employeeDept = responses.filter((item) => {
    if (item.department.name === dept) {
      console.log(item.department.name);
    }
  });
  console.log("\n");

  const birthday = "03";
  let employeeBirth = responses.filter((item) => {
    var newDate = item.birthday;
    var newMonth = newDate.split("-");
    if (newMonth[1] === birthday) {
      console.log(newMonth[1]);
    }
  });

  return employeeSalary, employeeCity, employeeDept, employeeBirth;
}
getEmployee();
