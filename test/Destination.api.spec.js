/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();
const path = require("path");
const { faker } = require("@faker-js/faker");
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

describe("API Whislist Destinations", () => {
    it("Succes add whislist destinations", async () => {
    const picture = path.resolve(__dirname, "./img.jpeg");
    const destinations = faker.address.cityName();
    const response = await request(app)
      .post("/api/destinations/add")
      .field("nameDestination", destinations)
      .attach("imageDestination", picture)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(201);
  });
  it("Failed add whislist destinations because image format", async () => {
    const picture = path.resolve(__dirname, "./17.-Gambar-Anime-Lucu.webp");
    const destinations = faker.address.cityName();
    const response = await request(app)
      .post("/api/destinations/add")
      .field("nameDestination", destinations)
      .attach("imageDestination", picture)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(400);
  });
  it("Failed add whislist destinations", async () => {
    const picture = path.resolve(__dirname, "./img.jpeg");
    const destinations = "Makassar";
    const response = await request(app)
      .post("/api/destinations/add")
      .field("nameDestination", destinations)
      .attach("imageDestination", picture)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(400);
  });
  it("Failed add whislist destinations", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImZpcnN0TmFtZSI6IkZhdGhhbmEiLCJsYXN0TmFtZSI6Ik11YmFyb2siLCJlbWFpbCI6Inpha2lyZGV2MjAwMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRqYkVPdmlZMUsuT2djYWNoamM5aG9PaHFKMDBWUDQ2R05obU1ROUt4cDJ3RXRzU2dOekhLLiIsImFkZHJlc3MiOiJydW1haGt1IGRpbWFuYSBubyAxMCIsInBob25lTnVtYmVyIjoiMDEyMzQ1NjcgICAgICIsImltYWdlIjpudWxsLCJyb2xlSWQiOiJidXllciIsImdlbmRlciI6Ik1hbGUiLCJkYXRlT2ZCaXJ0aCI6IjIwMDAtMTAtMDkiLCJOSUsiOiIxMjM0NTY3OCIsImlhdCI6MTY3MTEwMTcyNiwiZXhwIjoxNjcxMTg4MTI2fQ.WzLHYYKxfssg_XkZMD0SWObF0QqvoWmevwZHSuPNyqM";
    const destination = {
      nameDestination: "Makassar", // already exist
      imageDestination:
        "https://ik.imagekit.io/wx1jhmfkq/IMG-1670892667288_A5DqUZbWo.jpeg",
        description: "Nice city",
    };
    const response = await request(app)
      .post("/api/destinations/add")
      .send(destination)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
   });
   it("Failed add whislist destinations Internal Server Error ", async () => {
    const picture = path.resolve(__dirname, "./img.jpeg");
    const destinations = "Makassar";
    const response = await request(app)
      .post("/api/destinations/add")
      .attach("imageDestination", picture)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(500);
  });
});

describe("API Whislist Destinations", () => {
  it("success get all whislist destinations", async () => {
    const response = await request(app).get("/api/destinations/findAll");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Whislist Destinations", () => {
  it("success get by id whislist destinastions", async () => {
    const IdDestination = {
      Id: 1,
    };
    const response = await request(app).get(
      `/api/destinations/findById/${IdDestination.Id}`
    );
    expect(response.statusCode).toBe(200);
  });
  it("Failed get by id whislist destinastions Internal Server Error", async () => {
    const IdDestination = {
      Id: `a`,
    };
    const response = await request(app).get(
      `/api/destinations/findById/${IdDestination.Id}`
    );
    expect(response.statusCode).toBe(500);
  });
});

describe("API Whislist Destinations", () => {
  it("update by id whislist destinations", async () => {
    const picture = path.resolve(__dirname, "./img.jpeg");
    const idDestinations = {
      Id: 1,
    };
    const response = await request(app)
      .put(`/api/destinations/update/${idDestinations.Id}`)
      .field("description", "Nice city")
      .field("nameDestination", faker.address.cityName())
      .attach("imageDestination", picture)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed update by id whislist destinations", async () => {
    const picture = path.resolve(__dirname, "./hello.txt");
    const idDestinations = {
      Id: 1,
    };
    const response = await request(app)
      .put(`/api/destinations/update/${idDestinations.Id}`)
      .field("description", "Nice city")
      .field("nameDestination", faker.address.cityName())
      .attach("imageDestination", picture)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(400);
  });
  it("failed update by id whislist destinations", async () => {
    const picture = path.resolve(__dirname, "./img.jpeg");
    const idDestinations = {
      Id: `a`,
    };
    const response = await request(app)
      .put(`/api/destinations/update/${idDestinations.Id}`)
      .field("description", "Nice city")
      .field("nameDestination", faker.address.cityName())
      .attach("imageDestination", picture)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(500);
  });
  it("failed update id whislist destinations", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImZpcnN0TmFtZSI6IkZhdGhhbmEiLCJsYXN0TmFtZSI6Ik11YmFyb2siLCJlbWFpbCI6Inpha2lyZGV2MjAwMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRqYkVPdmlZMUsuT2djYWNoamM5aG9PaHFKMDBWUDQ2R05obU1ROUt4cDJ3RXRzU2dOekhLLiIsImFkZHJlc3MiOiJydW1haGt1IGRpbWFuYSBubyAxMCIsInBob25lTnVtYmVyIjoiMDEyMzQ1NjcgICAgICIsImltYWdlIjpudWxsLCJyb2xlSWQiOiJidXllciIsImdlbmRlciI6Ik1hbGUiLCJkYXRlT2ZCaXJ0aCI6IjIwMDAtMTAtMDkiLCJOSUsiOiIxMjM0NTY3OCIsImlhdCI6MTY3MTEwMTcyNiwiZXhwIjoxNjcxMTg4MTI2fQ.WzLHYYKxfssg_XkZMD0SWObF0QqvoWmevwZHSuPNyqM";
    const idDestinations = {
      Id: 1,
    };
    const destination = {
      nameDestination: faker.address.cityName(),
      imageDestination:
        "https://ik.imagekit.io/wx1jhmfkq/IMG-1670892667288_A5DqUZbWo.jpeg",
        description: "Nice city",
    };
    const response = await request(app)
      .put(`/api/destinations/update/${idDestinations.Id}`)
      .send(destination)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Flights", () => {
  it("Delete Destination by ID", async () => {
    const destinationId = {
      id: 2,
    };
    const response = await request(app).delete(`/api/destinations/delete/${destinationId.id}`).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("Delete Destination by ID", async () => {
    const destinationId = {
      id: `a`,
    };
    const response = await request(app).delete(`/api/destinations/delete/${destinationId.id}`).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(500);
  });
});