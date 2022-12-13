/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();
const path = require('path');
const { faker } = require('@faker-js/faker');
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



describe("API Whislist Destinations", () => {
  it("success add whislist destinations", async () => {
    const destination = {
      userId: 1,
      nameDestination: faker.address.cityName(),
    };
    const response = await request(app).post("/api/destinations/add").send(destination).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(201);
  });
  it("Failed add whislist destinations", async () => {
    const destination = {
      "userId": 1,
        "nameDestination": "Makassar", // already exist
        "imageDestination": "https://ik.imagekit.io/wx1jhmfkq/IMG-1670892667288_A5DqUZbWo.jpeg"
    };
    const response = await request(app).post("/api/destinations/add").send(destination).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(400);
  });
});

describe("API Whislist Destinations", () => {
  it("success get all whislist destinations", async () => {
    const response = await request(app).get("/api/destinations/findAll");
    expect(response.statusCode).toBe(200);
  });
  it("failed get all whislist destinations", async () => {
    const response = await request(app).get("/api/destinations/findAl");
    expect(response.statusCode).toBe(404);
  });
});

describe("API Whislist Destinations", () => {
  it("success get by id whislist destinations", async () => {
    const IdDestination = {
      Id: 1,
    };
    const response = await request(app).get(`/api/destinations/findById/${IdDestination.Id}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed get by id whislist destinations", async () => {
    const IdDestination = {
      Id: 1,
    };
    const response = await request(app).get(`/api/destinations/findByI/${IdDestination.Id}`);
    expect(response.statusCode).toBe(404);
  });
});


describe("API Whislist Destinations", () => {
  it("update by id whislist destinations", async () => {
    const picture = path.resolve(__dirname, './img.jpeg');
    const idDestinations = {
      Id: 1,
    }
    const response = await request(app).put(`/api/destinations/update/${idDestinations.Id}`).field('userId', 1).field('nameDestination', faker.address.cityName()).attach('imageDestination', picture).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("failed update id whislist destinations", async () => {
    const idDestinations = {
      Id: 1,
    }
    const destination = {
      userId: 1,
      nameDestination: faker.address.cityName(),
      imageDestination: "https://ik.imagekit.io/wx1jhmfkq/IMG-1670892667288_A5DqUZbWo.jpeg"
    };
    const response = await request(app).put(`/api/destinations/update/${idDestinations.Id}`).send(destination).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(500);
  });
});

