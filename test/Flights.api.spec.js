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

describe("API Flights", () => {
  it("success get all flights", async () => {
    const response = await request(app).get("/api/flights/findAll");
    expect(response.statusCode).toBe(200);
  });
  it("failed get all flights", async () => {
    const response = await request(app).get("/api/flights/findAl");
    expect(response.statusCode).toBe(404);
  });
});

describe("API Flights", () => {
  it("success get by id flights", async () => {
    const IdFlight = {
      id: 1,
    };
    const response = await request(app).get(`/api/flights/findById/${IdFlight.id}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed get by id flights", async () => {
    const IdFlight = {
      id: 1,
    };
    const response = await request(app).get(`/api/flights/findByI/${IdFlight.id}`);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Flights", () => {
  it("update by id Flights", async () => {
    const IdFlight = {
      id: 1,
    }
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
    const response = await request(app).put(`/api/flights/update/${IdFlight.id}`).send(flight).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed update by id flights", async () => {
    const IdFlight = {
      id: 1,
    }
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
    const response = await request(app).put(`/api/flights/updat/${IdFlight.id}`).send(flight).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(404);
  });
});


describe("API Flights", () => {
  it("Search Flights", async () => {
    const flight = {
      from: "Jakarta - HLP",
      to: "Makassar - UPG",
      depatureDate: "2022-08-10",
      typeOfFlight: "One Way"   
    };
    const response = await request(app).get("/api/flights/search").send(flight);
    expect(response.statusCode).toBe(200);
  });
  it("Failed search Flights", async () => {
    const flight = {
      from: "Jakarta - HLP",
      to: "Makassar - UPG",
      depatureDate: "2022-08-10",
      typeOfFlight: "One Way"   
    };
    const response = await request(app).get("/api/flights/searc").send(flight);
    expect(response.statusCode).toBe(404);
  });
});