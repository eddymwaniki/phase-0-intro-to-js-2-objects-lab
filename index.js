const employee = {
    name : "Laban Daron",
    streetAddress : "Nairobi"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, { [key]: value });
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "Age",31)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
  
    delete newEmployee[key];
  
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
    return employee;
  }




