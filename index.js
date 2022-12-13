function createEmployeeRecord(employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};
// createEmployeeRecords
function  createEmployeeRecords(employeeRecords) {
  return employeeRecords.map(function (employee) {
    return createEmployeeRecord(employee);
  });
};
// createTimeInEvent 
let createTimeInEvent = function (employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });

  return employee;
};
//  createTimeOutEvent
function  createTimeOutEvent(employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
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

  return (outEvent.hour - inEvent.hour) / 100;
};
//wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour
function wagesEarnedOnDate(employee, dateRecord) {
  let payDay = hoursWorkedOnDate(employee, dateRecord) * employee.payPerHour;
  return parseFloat(payDay.toString());
};

function allWagesFor(employee) {
  let eligibleDates = employee.timeInEvents.map(function (e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate(employee, d);
  }, 0);

  return payable;
};

function  findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(function (rec) {
    return rec.firstName === firstName;
  });
};
// calculatePayroll: calculates that the employees earned 770 dollars

function calculatePayroll(arrayOfEmployeeRecords) {
  return arrayOfEmployeeRecords.reduce(function (memo, rec) {
    return memo + allWagesFor(rec);
  }, 0);
};