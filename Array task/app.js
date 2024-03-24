let employees = [];

  function addEmployee() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const salary = document.getElementById('salary').value;

    if (isValidName(firstName) && isValidName(lastName) && isValidSalary(salary)) {
      employees.push({ firstName, lastName, salary });
      displayEmployeeList();
    } else {
      alert("Please enter valid data.");
    }
  }

  function isValidName(name) {
    return /^[a-zA-Z]+$/.test(name);
  }

  function isValidSalary(salary) {
    return !isNaN(salary) && parseInt(salary) > 0;
  }

  function displayEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    employees.forEach(employee => {
      const li = document.createElement('li');
      li.innerHTML = `<input type="checkbox" name="selectedEmployee" value="${employee.firstName} ${employee.lastName}"> ${employee.firstName} ${employee.lastName}`;
      employeeList.appendChild(li);
    });
  }

  function loadSelectedEmployees() {
    const selectedEmployees = document.querySelectorAll('input[name="selectedEmployee"]:checked');
    const selectedEmployeesBody = document.getElementById('selectedEmployeesBody');
    selectedEmployeesBody.innerHTML = '';

    selectedEmployees.forEach(employee => {
      const fullName = employee.value.split(' ');
      const firstName = fullName[0];
      const lastName = fullName[1];
      const selectedEmployee = employees.find(emp => emp.firstName === firstName && emp.lastName === lastName);
      if (selectedEmployee) {
        const row = selectedEmployeesBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = selectedEmployee.firstName;
        cell2.textContent = selectedEmployee.lastName;
        cell3.textContent = selectedEmployee.salary;
      }
    });
  }