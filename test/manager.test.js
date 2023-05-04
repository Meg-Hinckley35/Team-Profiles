const Manager = require("../lib/manager");

describe("Manager", () => {
    const mockManager = {
        name: "Amy",
        id: 23,
        email: "amy@test.com",
        officeNumber: 305,
        role: "Manager"
    };
    describe("constructor tests", () => {
        test("should construct a new instance of the manager class", () => {
          const manager = new Manager(mockManager);
          expect(manager).toBeInstanceOf(Manager);
        });
        test("should construct a new instance of Manager class with name, id, email, and officeNumber", () => {
            const manager = new Manager(mockManager);
            expect(manager).toEqual({
                name: "Amy",
                id: 23,
                email: "amy@test.com",
                officeNumber: 305,
                role: "Manager"
            });
        });
    });
    describe("method tests", () => {
        test("should return id when getId is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getId()).toEqual(23);
        });
        test("should return name when getName is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getName()).toEqual("Amy");
        });
        test("should return email when getEmail is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getEmail()).toEqual("amy@test.com");
        });
        test("should return officeNumber when getOfficeNumber is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getOfficeNumber()).toEqual(305);
        });
        test("should return manager role when getRole is called", () => {
            const manager = new Manager(mockManager);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});