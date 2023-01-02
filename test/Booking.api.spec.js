/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require('@faker-js/faker');
require("dotenv").config();

describe("API Booking", () => {
  it("success add oneway Booking", async () => {
    const booking = [{
      "name": "nadir",
      "age": 20, 
      "NIK": 1234567891012, 
      "phoneNumber": "0823243462344",
      "seatNumber" : "A1",
      "price": 1000000,
      "flightId": 1,
      "userId": 1
    }];
    const response = await request(app).post("/api/bookings/add").send(booking)
  });
  it("failed add oneway Booking", async () => {
    const booking = [{
      "name": "nadir",
      "age": 20, 
      "NIK": 1234567891012, 
      "phoneNumber": "0823243462344",
      "seatNumber" : "A1",
      "price": 1000000,
      "flightId": 1,
      "userId": 1000
    }];
    const response = await request(app).post("/api/bookings/add").send(booking)
  });
  it("error add oneway Booking", async () => {
    const booking = [{
      "name": "nadir",
      "age": 20, 
      "NIK": 1234567891012, 
      "phoneNumber": "0823243462344",
      "seatNumber" : "A1",
      "price": 1000000,
      "flightId": 1,
      "userId": "a"
    }];
    const response = await request(app).post("/api/bookings/add").send(booking)
  });
});

describe("API Booking", () => {
  it("success add round trio Booking", async () => {
    const booking = [{
      "name": "nawi",
      "age": 20, 
      "NIK": 1234567891012, 
      "phoneNumber": "0823243462344",
      "seatNumber" : "A1",
      "price": 1000000,
      "flightId": 1,
      "userId": 1
  },
   {
      "name": "zakir",
      "age": 20, 
      "NIK": 1234567891012, 
      "phoneNumber": "0823243462344",
      "seatNumber" : "A1",
      "price": 1000000,
      "flightId": 1,
      "userId": 1
  }];
    const response = await request(app).post("/api/bookings/add").send(booking)
  });
  it("failed add round trio Booking", async () => {
    const booking = [{
      "name": "nawi",
      "age": 20, 
      "NIK": 1234567891012, 
      "phoneNumber": "0823243462344",
      "seatNumber" : "A1",
      "price": 1000000,
      "flightId": 1,
      "userId": 1000
  },
   {
      "name": "zakir",
      "age": 20, 
      "NIK": 1234567891012, 
      "phoneNumber": "0823243462344",
      "seatNumber" : "A1",
      "price": 1000000,
      "flightId": 1,
      "userId": 3
  }];
    const response = await request(app).post("/api/bookings/add").send(booking)
    expect(response.statusCode).toBe(400);
  });
});


describe("API Booking", () => {
  it("success get all Booking", async () => {
    const response = await request(app).get("/api/bookings/findAll");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Booking", () => {
  it("success get by id Booking", async () => {
    const IdBooking = {
      id: 1,
    };
    const response = await request(app).get(`/api/bookings/findById/${IdBooking.id}`);
    expect(response.statusCode).toBe(200);
  });
  it("success get by id Booking", async () => {
    const IdBooking = {
      id: "a",
    };
    const response = await request(app).get(`/api/bookings/findById/${IdBooking.id}`);
    expect(response.statusCode).toBe(500);
  });
});


describe("API Booking", () => {
  it("success update Booking", async () => {
    const booking = {
      "name": "nadir",
      "price": 1000000,
      status: true, 
      id: 1, 
      email: "zakirdev2002@gmail.com", 
      bagage: 100000,
    };
    const response = await request(app).post("/api/bookings/update").send(booking)
    expect(response.statusCode).toBe(200);
  });
  it("failed update Booking", async () => {
    const booking = {
      "name": "nadir",
      "price": 1000000,
      status: "a", 
      id: 1, 
      email: "zakirdev2002@gmail.com", 
      bagage: 100000,
    };
    const response = await request(app).post("/api/bookings/update").send(booking)
    expect(response.statusCode).toBe(500);

  });
});


describe("API Booking", () => {
  it("delete Booking", async () => {
    const IdBooking = {
      id: "a",
    };
    const response = await request(app).delete(`/api/bookings/delete/${IdBooking.id}`);
    expect(response.statusCode).toBe(500);
  });
});