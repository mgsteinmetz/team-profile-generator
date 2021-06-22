const Intern = require('../lib/intern');

// testing the Intern class
describe("Intern class", () => {
    describe("Making new Intern", () => {
        it("should generate a new intern", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(new Intern()).toBeInstanceOf(Intern);
        });
    });

    // testing intern name
    describe("intern name", () => {
        it("should display input for intern name", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(newIntern.name).toEqual('Greg');
        });
    });

    // testing intern id
    describe("intern id", () => {
        it("should display input for intern id", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(newIntern.id).toEqual('95');
        });
    });

    // testing intern email
    describe("intern email", () => {
        it("should display input for intern email", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(newIntern.email).toEqual('greg@gmail.com');
        });
    });

    // testing intern school
    describe("intern school", () => {
        it("should display input for intern school", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(newIntern.school).toEqual('UofM');
        });
    });

    // testing getName function
    describe("getName function", () => {
        it("should return this.name", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(newIntern.getName()).toEqual('Greg');
        });
    });

    // testing getId function
    describe("getId function", () => {
        it("should return this.id", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(newIntern.getId()).toEqual('95');
        });
    });

    // testing getEmail function
    describe("getEmail function", () => {
        it("should return this.email", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(newIntern.getEmail()).toEqual('greg@gmail.com');
        });
    });

    // testing getSchool function
    describe("getSchool function", () => {
        it("should return this.school", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(newIntern.getSchool()).toEqual('UofM');
        });
    });

    // testing getRole function
    describe("getRole function", () => {
        it("should return this.role", () => {
            const newIntern = new Intern('Greg', '95', 'greg@gmail.com', 'UofM');

            expect(newIntern.getRole()).toEqual('Intern');
        });
    });
});