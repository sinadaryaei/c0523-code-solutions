const business = {
  opens: '9:00 AM',
  closes: '5:00 PM',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'TH', 'F'],
  employees: {
    john: {
      position: 'jr instructor',
      daysofWeekWorking: ['M', 'W', 'F'],
    },
    joe: {
      position: 'sr instrustor',
      daysofWeekWorking: ['M', 'F'],
    },
    mike: {
      position: 'admin',
      daysofWeekWorking: ['F'],
    },
    mark: {
      position: 'manager',
      daysofWeekWorking: ['TH'],
    },
  },
};

function addWeekends() {
  business.daysOpen.push('SA', 'SU');
  for (const employee in business.employees) {
    business.employees[employee].daysofWeekWorking.push('SA', 'SU');
  }
}

addWeekends(business);

// function addEmployees() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users=> {

//   })
// }
