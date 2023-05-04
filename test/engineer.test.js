const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    const mockEngineer = {
        name: "Brady",
        id: 68,
        email: "brady@test.com",
        github: "www.github.com/brady_test",
        role: "Engineer"
    };
    describe("constructor tests", () => {
        test("should construct a new instance of the engineer class", () => {
          const engineer = new Engineer(mockEngineer);
          expect(engineer).toBeInstanceOf(Engineer);
        });
        test("should construct a new instance of engineer class with name, id, email, and github", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toEqual({
                name: "Brady",
                id: 68,
                email: "brady@test.com",
                github: "www.github.com/brady_test",
                role: "Engineer"
            });
        });
    });
    describe("method tests", () => {
        test("should return id when getId is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getId()).toEqual(68);
        });
        test("should return name when getName is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getName()).toEqual("Brady");
        });
        test("should return email when getEmail is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getEmail()).toEqual("brady@test.com");
        });
        test("should return github url when getGithub is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getGithub()).toEqual("www.github.com/brady_test");
        });
        test("should return engineer role when getRole is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});