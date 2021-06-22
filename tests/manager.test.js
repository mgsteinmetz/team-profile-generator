const Manager = require('../lib/manager');

// testing the Manager class
describe("Manager class", () => {
    describe("Making new Manager", () => {
        it("should generate a new manager", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(new Manager()).toBeInstanceOf(Manager);
        });
    });

    // testing manager name
    describe("manager name", () => {
        it("should display input for manager name", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(newManager.name).toEqual('Heidi');
        });
    });

    // testing manager id
    describe("manager id", () => {
        it("should display input for manager id", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(newManager.id).toEqual('2');
        });
    });

    // testing manager email
    describe("manager email", () => {
        it("should display input for manager email", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(newManager.email).toEqual('heidi@gmail.com');
        });
    });

    // testing manager office number
    describe("manager officeNumber", () => {
        it("should display input for manager officeNumber", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(newManager.officeNumber).toEqual('2');
        });
    });

    // testing getName function
    describe("getName function", () => {
        it("should return this.name", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(newManager.getName()).toEqual('Heidi');
        });
    });

    // testing getId function
    describe("getId function", () => {
        it("should return this.id", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(newManager.getId()).toEqual('2');
        });
    });

    // testing getEmail function
    describe("getEmail function", () => {
        it("should return this.email", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(newManager.getEmail()).toEqual('heidi@gmail.com');
        });
    });

    // testing getOfficeNumber function
    describe("getOfficeNumber function", () => {
        it("should return this.officeNumber", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(newManager.getOfficeNumber()).toEqual('2');
        });
    });

    // testing getRole function
    describe("getRole function", () => {
        it("should return this.role", () => {
            const newManager = new Manager('Heidi', '2', 'heidi@gmail.com', '2');

            expect(newManager.getRole()).toEqual('Manager');
        });
    });
});