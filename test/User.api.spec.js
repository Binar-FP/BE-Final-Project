/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();

describe("API Register", () => {
  it("success register", async () => {
    const user = {
      email: "reinhart300@gmail.com",
      password: "kimochinandayo",
      username: "reinhart300",
      roleId: "3",
      NIK: "012345678",
      phoneNumber: "01234567",
      address: "rumahku dimana no 10",
      countryCode: "62",
    };
    const response = await request(app).post("/api/register").send(user);
    expect(response.statusCode).toBe(201);
  });
  it("Failed register", async () => {
    const user = {
      email: "reinhart20@gmail.com",
      password: "",
      username: "reinhart20",
      roleId: "3",
      NIK: "012345678",
      phoneNumber: "01234567",
      address: "rumahku dimana no 10",
      countryCode: "62",
    };
    const response = await request(app).post("/api/register").send(user);
    expect(response.statusCode).toBe(400);
  });
});

describe("API Login", () => {
  it("Success login", async () => {
    const user = {
      email: "reinhart200@gmail.com",
      password: "kimochinandayo",
    };
    const response = await request(app).post("/login").send(user);
    expect(response.statusCode).toBe(200);
  });
  it("Failed login", async () => {
    const user = {
      email: "reinhart200@gmail.com",
      password: "kimochinandayo10",
    };
    const response = await request(app).post("/login").send(user);
    expect(response.statusCode).toBe(401);
  });
});
