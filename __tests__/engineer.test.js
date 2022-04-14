const Engineer = require('../lib/engineer');

test ('creates engineer', () => {
    const engineer = new Engineer('Sammy', 1234, 'Sammy@gmail.com', 'JoelHauser');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test ('get github', () => {
    const engineer = new Engineer('Sammy', 1234, 'Sammy@gmail.com', 'JoelHauser');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test ('get role', () => {
    const engineer = new Engineer('Sammy', 1234, 'Sammy@gmail.com', 'JoelHauser');
    expect(engineer.getRole()).toEqual('Engineer');
});