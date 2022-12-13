// Your code here
// [20 passing]
 function createEmployeeRecord(employee) {
  const employeeRecords = {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
  return employeeRecords;
 };

//  createEmployeeRecords
 function createEmployeeRecords(newArr){
  return newArr.map(createEmployeeRecord);
 }

//  createTimeInEvent
let createTimeInEvent = function (employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 8),
    date,
  });

  return employee;
};

// createTimeInEvent
function createTimeInEvent (employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 5),
    date,
  });
  return employee;
};

// createTimeOutEvent

function createTimeOutEvent (employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 5),
    date,
  });

  return employee;
};

// hoursWorkedOnDate
function hoursWorkedOnDate(employee, recordedDate) {
  let inEvent = employee.timeInEvents.find(function (e) {
    return e.date === recordedDate;
  });

  let outEvent = employee.timeOutEvents.find(function (e) {
    return e.date === recordedDate;
  });
  return (outEvent.hour - inEvent.hour) / 100;  //behavior
};