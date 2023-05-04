const Intern = require("../lib/intern");

describe("Intern", () => {
    const mockIntern = {
        name: "Jessica",
        id: 170,
        email: "jessica@test.com",
        school: "Columbia University",
    };
    describe("constructor tests", () => {
        test("should construct a new instance of the intern class", () => {
          const intern = new Intern(mockIntern);
          expect(intern).toBeInstanceOf(Intern);
        });
        test("should construct a new instance of Intern class with name, id, email, and school", () => {
            const intern = new Intern(mockIntern);
            expect(intern).toEqual({
                name: "Jessica",
                id: 170,
                email: "jessica@test.com",
                school: "Columbia University",
            });
        });
    });
    describe("method tests", () => {
        test("should return id when getId is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getId()).toEqual(170);
        });
        test("should return name when getName is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getName()).toEqual("Jessica");
        });
        test("should return email when getEmail is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getEmail()).toEqual("jessica@test.com");
        });
        test("should return school when getSchool is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getGithub()).toEqual("Columbia University");
        });
        test("should return intern role when getRole is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});