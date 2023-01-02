/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();
const { addPassenger, updatePassengerById } = require("../app/controllers/passengerController");

describe("API Passengers", () => {
  it("Add Passenger", async () => {
    const passenger = addPassenger("Anak Nadir", 30, 8800444335555555, "082137866654", 1);
    const dataPassenger = passenger;
    dataPassenger.then(function (result) {
      expect(result.age).toBe(30);
    });
  });
  it("failed add passenger", async () => {
    expect(addPassenger(Error));
  });
});

describe("API Passengers", () => {
  it("success get all passenger", async () => {
    const response = await request(app).get("/api/passenger/findAll");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Passengers", () => {
  it("success get by id passenger", async () => {
    const Idpassenger = {
      id: 1,
    };
    const response = await request(app).get(`/api/passenger/findById/${Idpassenger.id}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed get by id passenger", async () => {
    const Idpassenger = {
      id: "a",
    };
    const response = await request(app).get(`/api/passenger/findById/${Idpassenger.id}`);
    expect(response.statusCode).toBe(500);
  });
});

describe("API Passengers", () => {
  it("failed update passenger", async () => {
    expect(updatePassengerById(Error));
  });
});

describe("API Passengers", () => {
  it("failed delete passenger by id", async () => {
    const Idpassenger = {
      id: "a",
    };
    const response = await request(app).delete(`/api/passenger/delete/${Idpassenger.id}`);
    expect(response.statusCode).toBe(500);
  });
});