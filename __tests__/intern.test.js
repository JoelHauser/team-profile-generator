const Intern = require('../lib/intern');

test ('create intern', () => {
    const intern = new Intern('Sammy', 1234, 'Sammy@gmail.com', 'MSU');
    expect(intern.name).toEqual(expect.any(String));
});

test ('get school', () => {
    const intern = new Intern('Sammy', 1234, 'Sammy@gmail.com', 'MSU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test ('get role', () => {
    const intern = new Intern('Sammy', 1234, 'Sammy@gmail.com', 'MSU');
    expect(intern.getRole()).toEqual('Intern');
});