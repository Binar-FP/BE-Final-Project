/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();
const { faker } = require('@faker-js/faker');
let token = '';

beforeAll(async () => {
  const user = {
    email: "zakir@gmail.com",
    password: "0205",
  };
  const response = await request(app).post("/api/login/admin").send(user);
  expect(response.statusCode).toBe(200);
  token = response.body.token
});


describe("API Whislist Destinations", () => {
  it("success add whislist destinations", async () => {
    const destination = {
      userId: 1,
      nameDestination: faker.address.cityName(),
      "imageDestination": "https://ik.imagekit.io/wx1jhmfkq/IMG-1670892667288_A5DqUZbWo.jpeg"
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

