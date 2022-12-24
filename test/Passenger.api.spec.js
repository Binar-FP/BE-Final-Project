/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require('@faker-js/faker');
require("dotenv").config();

// describe("API Passengers", () => {
//   it("success add passenger", async () => {
//     const passenger = {
//       "name": faker.name.fullName(),
//       "age": 12,
//       "NIK": 733134141341,
//       "phoneNumber": "08229190320",
//       "bookingId": 1,
//     };
//     const response = await request(app).post("/api/passenger/add").send(passenger);
//     expect(response.statusCode).toBe(201);
//   });
// });

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
});

// describe("API Passengers", () => {
//   it("update by id Passengers", async () => {
//     const IdPassenger = {
//       id: 1,
//     }
//     const passenger = {
//       "name": "Agung Kurniawan",
//       "age": 30,
//       "NIK": 330134141341,
//       "phoneNumber": "08229191234"
//     };
//     const response = await request(app).put(`/api/passenger/update/${IdPassenger.id}`).send(passenger);
//     expect(response.statusCode).toBe(200);
//   });
// });