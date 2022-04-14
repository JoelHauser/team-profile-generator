const Employee = require('../lib/manager');

test ('create manager', () => {
    const employee = new Employee('Sammy', 1234, 'Sammy@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test ('get name', () => {
    const employee = new Employee('Sammy', 1234, 'Sammy@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test ('get ID', () => {
    const employee = new Employee('Sammy', 1234, 'Sammy@gmail.com');

    expect(employee.getId).toEqual(expect.any(Number));
});

test ('get email', () => {
    const employee = new Employee('Sammy', 1234, 'Sammy@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));  
});

test ('get role', () => {
    const employee = new Employee('Sammy', 1234, 'Sammy@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});