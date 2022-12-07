/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();

describe("API Register", () => {
  it("success register", async () => {
    const user = {
      email: "reinhart12@gmail.com",
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

describe("API Login", () => {
  it("Success login", async () => {
    const user = {
      email: "reinhart@gmail.com",
      password: "12345678",
    };
    const response = await request(app).post("/login").send(user);
    expect(response.statusCode).toBe(200);
  });
  it("Failed login", async () => {
    const user = {
      email: "reinhart0@gmail.com",
      password: "kimochinandayo10",
    };
    const response = await request(app).post("/login").send(user);
    expect(response.statusCode).toBe(404);
  });
});
