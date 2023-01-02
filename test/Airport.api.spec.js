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
  it("Failed add Airports Internal Server Error ", async () => {
    const airport = {
      "name": 1,
      "code": "BTH",
      "location": "Batam"
    };
    const response = await request(app).post("/api/airports/add").send(airport).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(500);
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
  it("success get by id airports", async () => {
    const IdAirports = {
      id: `a`,
    };
    const response = await request(app).get(`/api/airports/findById/${IdAirports.id}`);
    expect(response.statusCode).toBe(500);
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
  it("update by id Airports", async () => {
    const IdAirport = {
      id: `a`,
    }
    const airport = {
      "name": "Soekarno-Hatta International Airport",
      "code": "CGK",
      "location": "Tangerang"
    };
    const response = await request(app).put(`/api/airports/update/${IdAirport.id}`).send(airport).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(500);
  });
});

// Delete
describe("API Flights", () => {
  it("Delete Flights", async () => {
    const airportId = {
      id: 2
    };
    const response = await request(app).delete(`/api/airports/delete/${airportId.id}`).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
});

describe("API Flights", () => {
  it("Failed Delete Flights Wrong Token", async () => {
    const aiportId = {
      id: 2
    };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImZpcnN0TmFtZSI6IkZhdGhhbmEiLCJsYXN0TmFtZSI6Ik11YmFyb2siLCJlbWFpbCI6Inpha2lyZGV2MjAwMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRqYkVPdmlZMUsuT2djYWNoamM5aG9PaHFKMDBWUDQ2R05obU1ROUt4cDJ3RXRzU2dOekhLLiIsImFkZHJlc3MiOiJydW1haGt1IGRpbWFuYSBubyAxMCIsInBob25lTnVtYmVyIjoiMDEyMzQ1NjcgICAgICIsImltYWdlIjpudWxsLCJyb2xlSWQiOiJidXllciIsImdlbmRlciI6Ik1hbGUiLCJkYXRlT2ZCaXJ0aCI6IjIwMDAtMTAtMDkiLCJOSUsiOiIxMjM0NTY3OCIsImlhdCI6MTY3MTEwMTcyNiwiZXhwIjoxNjcxMTg4MTI2fQ.WzLHYYKxfssg_XkZMD0SWObF0QqvoWmevwZHSuPNyqM";
    const response = await request(app).delete(`/api/airports/delete/${aiportId.id}`).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
  it("Failed Delete Flights Internal Server Error", async () => {
    const aiportId = {
      id: `a`
    };
    const response = await request(app).delete(`/api/airports/delete/${aiportId.id}`).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(500);
  });
});