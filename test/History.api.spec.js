/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require('@faker-js/faker');
require("dotenv").config();
const {updateHistoriById, addHistory} = require("../app/controllers/historyController");

let token = '';

beforeAll(async () => {
  const admin = {
    email: "zakir@gmail.com",
    password: "0205",
  };
  const response = await request(app).post("/api/login/admin").send(admin);
  expect(response.statusCode).toBe(200);
  token = response.body.token
});

describe("API History", () => {
  it("success get All History", async () => {
    const response = await request(app).get("/api/histories/all").set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
});

describe("API History", () => {
  it("success get History", async () => {
    const history = {
      "id": 1,
    };
    const response = await request(app).post("/api/histories").send(history)
    expect(response.statusCode).toBe(200);
  });
  it("failed get History", async () => {
    const history = {
      "id": "a",
    };
    const response = await request(app).post("/api/histories").send(history)
    expect(response.statusCode).toBe(500);
  });
});

describe("API History", () => {
  it("error get All History", async () => {
    expect(updateHistoriById(Error));
  });
  it("error add History", async () => {
    expect(addHistory(Error));
  });
});