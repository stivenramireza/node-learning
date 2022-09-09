const employees = [
  {
    id: 1,
    name: 'Stiven',
  },
  {
    id: 2,
    name: 'Linda',
  },
  {
    id: 3,
    name: 'Karen',
  },
];

const wages = [
  {
    id: 1,
    salary: 1000,
  },
  {
    id: 2,
    salary: 1500,
  },
];

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find((e) => e.id === id)?.name;
    !employee ? reject(`Employee with id ${id} does not exist`) : resolve(employee);
  });
};

const getSalary = (id) => {
  return new Promise((resolve, reject) => {
    const salary = wages.find((s) => s.id === id)?.salary;
    !salary ? reject(`Salary with id ${id} does not exist`) : resolve(salary);
  });
};

const id = 3;

// getEmployee(id)
//   .then((employee) => console.log(employee))
//   .catch((err) => console.error(err));

// getSalary(id)
//   .then((salary) => console.log(salary))
//   .catch((err) => console.error(err));

let name;

getEmployee(id)
  .then((employee) => {
    name = employee;
    return getSalary(id);
  })
  .then((salary) => console.log(`The employee ${name} has a salary of ${salary}`))
  .catch((err) => console.error(err));
