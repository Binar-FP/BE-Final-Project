/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require('@faker-js/faker');
require("dotenv").config();


let token = '';

beforeAll(async () => {
  const user = {
    email: "zakir@gmail.com",
    password: "0205",
  };
  const response = await request(app).post("/api/login/admin").send(user);
  expect(response.statusCode).toBe(200);
  token = response.body.token
});

describe("API Flights", () => {
  it("success add Flight", async () => {
    const flight = {
      "airPortId": 1,
      "destinationId": 1,
      "flightNumber": "JP " + faker.datatype.number(9999),
      "airLine": "Lion Air",
      "from": "Jakarta - HLP",
      "to": "Makassar - UPG",
      "depatureDate": "2022-08-10",
      "depatureTime": "11:15",
      "arrivalDate": "2022-08-10",
      "arrivalTime": "12:15",
      "capasity": 250,
      "economyClassPrice": 500000,
      "businessClassPrice": 1000000,
      "firstClassPrice": 2000000,
      "typeOfFlight": "One Way"   
    };
    const response = await request(app).post("/api/flights/add").send(flight).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(201);
  });
  it("Failed add FLight", async () => {
    const flight = {
      "airPortId": 1,
      "destinationId": 1,
      "flightNumber": "JT 0534",
      "airLine": "Lion Air",
      "from": "Jakarta",
      "to": "Solo",
      "depatureDate": "2022-08-10",
      "depatureTime": "11:15:30",
      "arrivalDate": "2022-08-10",
      "arrivalTime": "12:15:30",
      "capasity": 250,
      "economyClassPrice": 500000,
      "businessClassPrice": 1000000,
      "firstClassPrice": 2000000,
      "typeOfFlight": "One Way"   
    };
    const response = await request(app).post("/api/flights/add").send(flight).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(400);
  });
});

