const Engineer = require('../lib/engineer');

// testing yhe Engineer class
describe("Engineer class", () => {
    describe("Making new Engineer", () => {
        it("should generate a new engineer", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(new Engineer()).toBeInstanceOf(Engineer);
        });
    });

    // testing engineer name
    describe("engineer name", () => {
        it("should display input for engineer name", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(newEngineer.name).toEqual('Dan');
        });
    });

    // testing engineer id
    describe("engineer id", () => {
        it("should display input for engineer id", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(newEngineer.id).toEqual('15');
        });
    });

    // testing engineer email
    describe("engineer email", () => {
        it("should display input for engineer email", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(newEngineer.email).toEqual('dan@gmail.com');
        });
    });

    // testing engineer github account
    describe("engineer github", () => {
        it("should display input for engineer github account", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(newEngineer.github).toEqual('Dan15');
        });
    });

    // testing getName function
    describe("getName function", () => {
        it("should return this.name", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(newEngineer.getName()).toEqual('Dan');
        });
    });

    // testing getId function
    describe("getId function", () => {
        it("should return this.id", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(newEngineer.getId()).toEqual('15');
        });
    });

    // testing getEmail function
    describe("getEmail function", () => {
        it("should return this.email", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(newEngineer.getEmail()).toEqual('dan@gmail.com');
        });
    });

    // testing getGitHub function
    describe("getGitHub function", () => {
        it("should return this.github", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(newEngineer.getGitHub()).toEqual('Dan15');
        });
    });

    // testing getRole function
    describe("getRole function", () => {
        it("should return this.role", () => {
            const newEngineer = new Engineer('Dan', '15', 'dan@gmail.com', 'Dan15');

            expect(newEngineer.getRole()).toEqual('Engineer');
        });
    });
});