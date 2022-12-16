/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();
const path = require("path");
const { faker } = require("@faker-js/faker");
const schedule = require("../app/models/schedule");
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

describe("API Schedules", () => {
  it("success add Schedule", async () => {
    const Schedule = {
      dateFlight: "2022-01-01",
      timeDepart: "12:00:00",
      timeLand: "12:00:00",
      currentPrice: 2000000,
    };
    const response = await request(app)
      .post("/api/Schedules/add")
      .send(Schedule)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(201);
  });
  it("Failed add schedule", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImZpcnN0TmFtZSI6IkZhdGhhbmEiLCJsYXN0TmFtZSI6Ik11YmFyb2siLCJlbWFpbCI6Inpha2lyZGV2MjAwMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRqYkVPdmlZMUsuT2djYWNoamM5aG9PaHFKMDBWUDQ2R05obU1ROUt4cDJ3RXRzU2dOekhLLiIsImFkZHJlc3MiOiJydW1haGt1IGRpbWFuYSBubyAxMCIsInBob25lTnVtYmVyIjoiMDEyMzQ1NjcgICAgICIsImltYWdlIjpudWxsLCJyb2xlSWQiOiJidXllciIsImdlbmRlciI6Ik1hbGUiLCJkYXRlT2ZCaXJ0aCI6IjIwMDAtMTAtMDkiLCJOSUsiOiIxMjM0NTY3OCIsImlhdCI6MTY3MTEwMTcyNiwiZXhwIjoxNjcxMTg4MTI2fQ.WzLHYYKxfssg_XkZMD0SWObF0QqvoWmevwZHSuPNyqM";
    const Schedule = {
      dateFlight: "2022-01-01",
      timeDepart: "12:00:00",
      timeLand: "12:00:00",
      currentPrice: 2000000,
    };
    const response = await request(app)
      .post("/api/destinations/add")
      .send(Schedule)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Schedules", () => {
  it("success get all schedule", async () => {
    const response = await request(app).get("/api/schedules/findAll");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Schedules", () => {
  it("success get by id schedule", async () => {
    const IdSchedule = {
      Id: 1,
    };
    const response = await request(app).get(
      `/api/schedules/findById/${IdSchedule.Id}`
    );
    expect(response.statusCode).toBe(200);
  });
});

describe("API Schedules", () => {
  it("update by id schedule", async () => {
    const IdSchedule = {
      Id: 1,
    };
    const Schedule = {
      dateFlight: "2022-01-01",
      timeDepart: "12:00:00",
      timeLand: "12:00:00",
      currentPrice: 2000000,
    };
    const response = await request(app).put(`/api/schedules/update/${IdSchedule.Id}`).send(Schedule).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed update by id schedule", async () => {
    const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImZpcnN0TmFtZSI6IkZhdGhhbmEiLCJsYXN0TmFtZSI6Ik11YmFyb2siLCJlbWFpbCI6Inpha2lyZGV2MjAwMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRqYkVPdmlZMUsuT2djYWNoamM5aG9PaHFKMDBWUDQ2R05obU1ROUt4cDJ3RXRzU2dOekhLLiIsImFkZHJlc3MiOiJydW1haGt1IGRpbWFuYSBubyAxMCIsInBob25lTnVtYmVyIjoiMDEyMzQ1NjcgICAgICIsImltYWdlIjpudWxsLCJyb2xlSWQiOiJidXllciIsImdlbmRlciI6Ik1hbGUiLCJkYXRlT2ZCaXJ0aCI6IjIwMDAtMTAtMDkiLCJOSUsiOiIxMjM0NTY3OCIsImlhdCI6MTY3MTEwMTcyNiwiZXhwIjoxNjcxMTg4MTI2fQ.WzLHYYKxfssg_XkZMD0SWObF0QqvoWmevwZHSuPNyqM";
    const IdSchedule = {
      Id: 1,
    };
    const Schedule = {
      dateFlight: "2022-01-01",
      timeDepart: "12:00:00",
      timeLand: "12:00:00",
      currentPrice: 2000000,
    };
    const response = await request(app).put(`/api/schedules/update/${IdSchedule.Id}`).send(Schedule).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Schedules", () => {
  it("delete by id schedule", async () => {
    const IdSchedule = {
      Id: 1,
    };
    const response = await request(app).delete(`/api/schedules/delete/${IdSchedule.Id}`).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed delete by id schedule", async () => {
    const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImZpcnN0TmFtZSI6IkZhdGhhbmEiLCJsYXN0TmFtZSI6Ik11YmFyb2siLCJlbWFpbCI6Inpha2lyZGV2MjAwMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRqYkVPdmlZMUsuT2djYWNoamM5aG9PaHFKMDBWUDQ2R05obU1ROUt4cDJ3RXRzU2dOekhLLiIsImFkZHJlc3MiOiJydW1haGt1IGRpbWFuYSBubyAxMCIsInBob25lTnVtYmVyIjoiMDEyMzQ1NjcgICAgICIsImltYWdlIjpudWxsLCJyb2xlSWQiOiJidXllciIsImdlbmRlciI6Ik1hbGUiLCJkYXRlT2ZCaXJ0aCI6IjIwMDAtMTAtMDkiLCJOSUsiOiIxMjM0NTY3OCIsImlhdCI6MTY3MTEwMTcyNiwiZXhwIjoxNjcxMTg4MTI2fQ.WzLHYYKxfssg_XkZMD0SWObF0QqvoWmevwZHSuPNyqM";
    const IdSchedule = {
      Id: 1,
    };
    
    const response = await request(app).delete(`/api/schedules/delete/${IdSchedule.Id}`).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});



