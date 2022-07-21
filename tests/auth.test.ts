import app from "../src/index.js";
import supertest from "supertest";

describe("POST /signup", () => {
  it("signup", async () => {
    const body = {
      name: "nn@gmail.com",
      email: "natannatannatan@gmail.com",
      password: "senhasenha",
      confirmPassword: "senhasenha",
    };

    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;

    expect(status).toEqual(200);
  });
  it("given a valid task it should return 201", async () => {
    const body = {
      email: "natannatannatan@gmail.com",
      password: "senhasenha",
    };

    const result = await supertest(app).post("/signin").send(body);
    const status = result.status;

    expect(status).toEqual(200);
  });
});
