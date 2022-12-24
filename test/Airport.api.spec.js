/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require('@faker-js/faker');
require("dotenv").config();


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

describe("API Airports", () => {
  it("success add Airport", async () => {
    const airport = {
      "name": faker.address.city(),
      "code": "CGK",
      "location": "Jakarta"
    };
    const response = await request(app).post("/api/airports/add").send(airport).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(201);
  });
  it("Failed add Airports", async () => {
    const airport = {
      "name": "Hang Nadim International Airport",
      "code": "BTH",
      "location": "Batam"
    };
    const response = await request(app).post("/api/airports/add").send(airport).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(400);
  });
});

describe("API Airports", () => {
  it("success get all airports", async () => {
    const response = await request(app).get("/api/airports/findAll");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Airports", () => {
  it("success get by id airports", async () => {
    const IdAirports = {
      id: 1,
    };
    const response = await request(app).get(`/api/airports/findById/${IdAirports.id}`);
    expect(response.statusCode).toBe(200);
  });
});

describe("API Airports", () => {
  it("update by id Airports", async () => {
    const IdAirport = {
      id: 1,
    }
    const airport = {
      "name": "Soekarno-Hatta International Airport",
      "code": "CGK",
      "location": "Tangerang"
    };
    const response = await request(app).put(`/api/airports/update/${IdAirport.id}`).send(airport).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
});

// Delete
