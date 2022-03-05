// Write your solution in this file!
const employee = {
    name: "ahmed",
    streetAddress: "union blvd",
}

function updateEmployeeWithKeyAndValue(employee, key, value){

    const newEmploye = {...employee};
    newEmploye[key]=value;
    return newEmploye;


}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmploye = {...employee};
    delete newEmploye.name;
    return newEmploye;
}

function destructivelyDeleteFromEmployeeByKey(employee){
    delete employee.name;
    return employee;
}