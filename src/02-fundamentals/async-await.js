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

const getInfoUser = async (id) => {
  try {
    const employee = await getEmployee(id);
    const salary = await getSalary(id);
    return `The salary of employee ${employee} is ${salary}`;
  } catch (error) {
    return error; // throw error;
  }
};

getInfoUser(id)
  .then((msg) => {
    console.log('OK!');
    console.log(msg);
  })
  .catch((err) => {
    console.error('ERROR!');
    console.error(err);
  });
