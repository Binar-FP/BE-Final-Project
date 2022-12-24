/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();

describe("API Login Admin", () => {
  it("success Login Admin", async () => {
    const admin = {
      email: "zakir@gmail.com",
      password: "0205",
    };
    const response = await request(app).post("/api/login/admin").send(admin);
    expect(response.statusCode).toBe(200);
  });
  it("Failed Login Admin", async () => {
    const admin = {
      email: "zakir@gmail.com",
      password: "3920",
    };
    const response = await request(app).post("/api/login/admin").send(admin);
    expect(response.statusCode).toBe(401);
  });
  it("Failed Login Admin not found", async () => {
    const admin = {
      email: "zaki@gmail.com",
      password: "3920",
    };
    const response = await request(app).post("/api/login/admin").send(admin);
    expect(response.statusCode).toBe(404);
  });
});

