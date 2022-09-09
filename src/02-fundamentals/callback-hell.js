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

const getEmployee = (id, callback) => {
  const employee = employees.find((e) => e.id === id)?.name;
  if (!employee) callback(`Employee with id ${id} does not exist`);
  callback(null, employee);
};

const getSalary = (id, callback) => {
  const salary = wages.find((s) => s.id === id)?.salary;
  if (!salary) callback(`Salary with id ${id} does not exist`);
  callback(null, salary);
};

const id = 3;

getEmployee(id, (err, employee) => {
  if (err) return console.log(err);

  getSalary(id, (err, salary) => {
    if (err) return console.log(err);
    console.log('Employee', employee, 'has a salary of', salary);
  });
});
