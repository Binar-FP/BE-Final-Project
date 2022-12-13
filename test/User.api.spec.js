/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require('@faker-js/faker');
require("dotenv").config();

describe("API Register", () => {
  it("success register", async () => {
    const user = {
      email: faker.internet.email(),
      password: "12345678",
      firstName: "reinhart00",
      lastName: "jims",
      NIK: "012345678",
      phoneNumber: "01234567",
      address: "rumahku dimana no 10",
    };
    const response = await request(app).post("/api/register").send(user);
    expect(response.statusCode).toBe(201);
  });
  it("Failed register", async () => {
    const user = {
      email: "reinhart0@gmail.com",
      password: "",
      firstName: "reinhart00",
      lastName: "jims",
      NIK: "012345678",
      phoneNumber: "01234567",
      address: "rumahku dimana no 10",
    };
    const response = await request(app).post("/api/register").send(user);
    expect(response.statusCode).toBe(400);
  });
});
