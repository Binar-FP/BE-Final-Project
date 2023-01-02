/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { addSeat, updateSeatById } = require("../app/controllers/seatController");
require("dotenv").config();

describe("API Seat", () => {
  it("Add Seat", async () => {
    const seat = addSeat("A1", 1, 1);
    const dataSeat = seat;
    dataSeat.then(function (result) {
      expect(result.seatNumber).toBe("A1");
    });
  });
  it("Error add seat", async () => {
    expect(addSeat(Error));
  });
});

describe("API Seat", () => {
  it("success get all seat", async () => {
    const response = await request(app).get("/api/seats/findAll");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Seat", () => {
  it("success get seat by id", async () => {
    const Idseat = {
      id: 1,
    };
    const response = await request(app).get(`/api/seats/findById/${Idseat.id}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed get seat by id", async () => {
    const Idseat = {
      id: "a",
    };
    const response = await request(app).get(`/api/seats/findById/${Idseat.id}`);
    expect(response.statusCode).toBe(500);
  });
});

describe("API Seat", () => {
  it("Error update Seat", async () => {
    expect(updateSeatById(Error));
  });
});

describe("API Seat", () => {
  it("success delete seat by id", async () => {
    const Idseat = {
      id: 1,
    };
    const response = await request(app).delete(`/api/seats/delete/${Idseat.id}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed delete seat by id", async () => {
    const Idseat = {
      id: "a",
    };
    const response = await request(app).delete(`/api/seats/delete/${Idseat.id}`);
    expect(response.statusCode).toBe(500);
  });
});