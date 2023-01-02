/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require('@faker-js/faker');
require("dotenv").config();

describe("API BoardingPass", () => {
  it("success add BoardingPass", async () => {
    const ticket = {
      "typeOfClass": "First Class",
    "name": "Muh Nadir Nawi",
    "from": "Jakarta",
    "to": "Solo",
    "NIK": 7772030302020002,
    "flightNumber": "JT 6534",
    "depatureDate": "2022-12-12",
    "depatureTime": "11:15",
    "seatNumber" : "A1"
    };
    const response = await request(app).post("/api/boardingPass/add").send(ticket)
  });
});
