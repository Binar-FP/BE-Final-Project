/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require('@faker-js/faker');
require("dotenv").config();

describe("API Whislist", () => {
  it("success add Whislist", async () => {
    const whislist = {
      "userId": 1,
      "destinationId": 1,
    };
    const response = await request(app).post("/api/whislist/add").send(whislist)
    expect(response.statusCode).toBe(201);
  });
  it("failed add Whislist", async () => {
    const whislist = {
      "userId": 1,
      "destinationId": 1
    };
    const response = await request(app).post("/api/whislist/add").send(whislist)
    expect(response.statusCode).toBe(400);
  });
  it("error add Whislist", async () => {
    const whislist = {
      "userId": 1,
      "destinationId": "a"
    };
    const response = await request(app).post("/api/whislist/add").send(whislist)
    expect(response.statusCode).toBe(500);
  });
});

describe("API Whislist", () => {
  it("success get Whislist user", async () => {
    const whislist = {
      "userId": 1,
    };
    const response = await request(app).post("/api/whislist/whislistUser").send(whislist)
    expect(response.statusCode).toBe(200);
  });
  it("error get Whislist user", async () => {
    const whislist = {
      "userId": "a",
    };
    const response = await request(app).post("/api/whislist/whislistUser").send(whislist)
    expect(response.statusCode).toBe(500);
  });
});

describe("API Whislist", () => {
  it("success get data Whislist", async () => {
    const whislist = {
      "id": 1,
    };
    const response = await request(app).post("/api/whislist/dataWhislist").send(whislist)
    expect(response.statusCode).toBe(200);
  });
  it("error get data Whislist", async () => {
    const whislist = {
      "id": "a",
    };
    const response = await request(app).post("/api/whislist/dataWhislist").send(whislist)
    expect(response.statusCode).toBe(500);
  });
});

describe("API Whislist", () => {
  it("search flight whislist", async () => {
    const whislist = {
      "depatureDate": "2022-08-10",
      "destinationId": 1
    };
    const response = await request(app).post("/api/whislist/searchFlight").send(whislist)
    expect(response.statusCode).toBe(200);
  });
  it("error flight whislist", async () => {
    const whislist = {
      "depatureDate": "2022-08-10",
      "destinationId": "a"
    };
    const response = await request(app).post("/api/whislist/searchFlight").send(whislist)
    expect(response.statusCode).toBe(500);
  });
});

describe("API Whislist", () => {
  it("search whislist", async () => {
    const whislist = {
      "userId": 3,
      "destinationId": 2
    };
    const response = await request(app).post("/api/whislist/searchWhislist").send(whislist)
    expect(response.statusCode).toBe(200);
  });
  it("error whislist", async () => {
    const whislist = {
      "userId": 3,
      "destinationId": "a"
    };
    const response = await request(app).post("/api/whislist/searchWhislist").send(whislist)
    expect(response.statusCode).toBe(500);
  });
});

describe("API Whislist", () => {
  it("success delete Whislist by id", async () => {
    const IdWhislist = {
      id: 1,
    };
    const response = await request(app).delete(`/api/whislist/delete/${IdWhislist.id}`);
    expect(response.statusCode).toBe(200);
  });
  it("error delete Whislist by id", async () => {
    const IdWhislist = {
      id: "a",
    };
    const response = await request(app).delete(`/api/whislist/delete/${IdWhislist.id}`);
    expect(response.statusCode).toBe(500);
  });
});
