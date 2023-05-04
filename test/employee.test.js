const Employee = require("../lib/employee");

describe("Employee", () => {
    const mockEmployee = {
        name: "Jimmy",
        id: 54,
        email: "jimmy@test.com",
    };
    describe("constructor tests", () => {
        test("should construct a new instance of an employee class", () => {
          const employee = new Employee(mockEmployee);
          expect(employee).toBeInstanceOf(Employee);
        });
        test("should construct a new instance of employee class with name, id, and email", () => {
            const employee = new Employee(mockEmployee);
            expect(employee).toEqual({
                name: "Jimmy",
                id: 54,
                email: "jimmy@test.com",
            });
        });
    });
    describe("method tests", () => {
        test("should return id when getId is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getId()).toEqual(54);
        });
        test("should return name when getName is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getName()).toEqual("Jimmy");
        });
        test("should return email when getEmail is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getEmail()).toEqual("jimmy@test.com");
        });
    });
});