/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require("@faker-js/faker");
require("dotenv").config();

let token = "";

beforeAll(async () => {
  const admin = {
    email: "zakir@gmail.com",
    password: "0205",
  };
  const response = await request(app).post("/api/login/admin").send(admin);
  expect(response.statusCode).toBe(200);
  token = response.body.token;
});

describe("API Flights", () => {
  it("success add Flight", async () => {
    const flight = {
      airPortId: 1,
      destinationId: 1,
      flightNumber: "JP " + faker.datatype.number(9999),
      airLine: "Lion Air",
      from: "Jakarta - HLP",
      to: "Makassar - UPG",
      depatureDate: "2022-08-10",
      depatureTime: "11:15",
      arrivalDate: "2022-08-10",
      arrivalTime: "12:15",
      capasity: 250,
      typeOfClass: "Business Class",
      ClassPrice: 1000000,
    };
    const response = await request(app)
      .post("/api/flights/add")
      .send(flight)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(201);
  });
  it("failed add Flight", async () => {
    const flight = {
      airPortId: 1,
      destinationId: 1,
      flightNumber: "JT 0534",
      airLine: "Lion Air",
      from: "Jakarta",
      to: "Solo",
      depatureDate: "2022-08-10",
      depatureTime: "11:15",
      arrivalDate: "2022-08-10",
      arrivalTime: "12:15",
      capasity: 250,
      typeOfClass: "Business Class",
      ClassPrice: 1000000,
    };
    const response = await request(app)
      .post("/api/flights/add")
      .send(flight)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(400);
  });
  it("Failed add FLight", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImZpcnN0TmFtZSI6IkZhdGhhbmEiLCJsYXN0TmFtZSI6Ik11YmFyb2siLCJlbWFpbCI6Inpha2lyZGV2MjAwMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRqYkVPdmlZMUsuT2djYWNoamM5aG9PaHFKMDBWUDQ2R05obU1ROUt4cDJ3RXRzU2dOekhLLiIsImFkZHJlc3MiOiJydW1haGt1IGRpbWFuYSBubyAxMCIsInBob25lTnVtYmVyIjoiMDEyMzQ1NjcgICAgICIsImltYWdlIjpudWxsLCJyb2xlSWQiOiJidXllciIsImdlbmRlciI6Ik1hbGUiLCJkYXRlT2ZCaXJ0aCI6IjIwMDAtMTAtMDkiLCJOSUsiOiIxMjM0NTY3OCIsImlhdCI6MTY3MTEwMTcyNiwiZXhwIjoxNjcxMTg4MTI2fQ.WzLHYYKxfssg_XkZMD0SWObF0QqvoWmevwZHSuPNyqM";
    const flight = {
      airPortId: 1,
      destinationId: 1,
      flightNumber: "JT 0534",
      airLine: "Lion Air",
      from: "Jakarta",
      to: "Solo",
      depatureDate: "2022-08-10",
      depatureTime: "11:15:30",
      arrivalDate: "2022-08-10",
      arrivalTime: "12:15:30",
      capasity: 250,
      typeOfClass: "Business Class",
      ClassPrice: 1000000,
    };
    const response = await request(app)
      .post("/api/flights/add")
      .send(flight)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Flights", () => {
  it("success get all flights", async () => {
    const response = await request(app).get("/api/flights/findAll");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Flights", () => {
  it("success get by id flights", async () => {
    const IdFlight = {
      id: 1,
    };
    const response = await request(app).get(
      `/api/flights/findById/${IdFlight.id}`
    );
    expect(response.statusCode).toBe(200);
  });
});

describe("API Flights", () => {
  it("update by id Flights", async () => {
    const IdFlight = {
      id: 1,
    };
    const flight = {
      airPortId: 1,
      destinationId: 1,
      flightNumber: "JP " + faker.datatype.number(9999),
      airLine: "Lion Air",
      from: "Jakarta - HLP",
      to: "Makassar - UPG",
      depatureDate: "2022-08-10",
      depatureTime: "11:15",
      arrivalDate: "2022-08-10",
      arrivalTime: "12:15",
      capasity: 250,
      typeOfClass: "Business Class",
      ClassPrice: 1000000,
    };
    const response = await request(app)
      .put(`/api/flights/update/${IdFlight.id}`)
      .send(flight)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed update by id flights", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImZpcnN0TmFtZSI6IkZhdGhhbmEiLCJsYXN0TmFtZSI6Ik11YmFyb2siLCJlbWFpbCI6Inpha2lyZGV2MjAwMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRqYkVPdmlZMUsuT2djYWNoamM5aG9PaHFKMDBWUDQ2R05obU1ROUt4cDJ3RXRzU2dOekhLLiIsImFkZHJlc3MiOiJydW1haGt1IGRpbWFuYSBubyAxMCIsInBob25lTnVtYmVyIjoiMDEyMzQ1NjcgICAgICIsImltYWdlIjpudWxsLCJyb2xlSWQiOiJidXllciIsImdlbmRlciI6Ik1hbGUiLCJkYXRlT2ZCaXJ0aCI6IjIwMDAtMTAtMDkiLCJOSUsiOiIxMjM0NTY3OCIsImlhdCI6MTY3MTEwMTcyNiwiZXhwIjoxNjcxMTg4MTI2fQ.WzLHYYKxfssg_XkZMD0SWObF0QqvoWmevwZHSuPNyqM";
    const IdFlight = {
      id: 1,
    };
    const flight = {
      airPortId: 1,
      destinationId: 1,
      flightNumber: "JP " + faker.datatype.number(9999),
      airLine: "Lion Air",
      from: "Jakarta - HLP",
      to: "Makassar - UPG",
      depatureDate: "2022-08-10",
      depatureTime: "11:15",
      arrivalDate: "2022-08-10",
      arrivalTime: "12:15",
      capasity: 250,
      typeOfClass: "Business Class",
      ClassPrice: 1000000,
    };
    const response = await request(app)
      .put(`/api/flights/update/${IdFlight.id}`)
      .send(flight)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Flights", () => {
  it("Search Flights", async () => {
    const flight = {
      from: "Jakarta",
      to: "Solo",
      depatureDate: "2022-08-10",
      typeOfClass : "Business Class"
    };
    const response = await request(app).post("/api/flights/search").send(flight);
    expect(response.statusCode).toBe(200);
  });
});
