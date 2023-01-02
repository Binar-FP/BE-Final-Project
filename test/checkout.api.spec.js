/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const { faker } = require('@faker-js/faker');
require("dotenv").config();

describe("API Checkout", () => {
  it("success add Checkout", async () => {
    const stripe = {
      "tokenId": "tok_amex",
      "amount": 5000000,
    };
    const response = await request(app).post("/api/checkout/checkout").send(stripe)
  });
  it("failed add Checkout", async () => {
    const stripe = {
      "tokenId": 123,
      "amount": "a",
    };
    const response = await request(app).post("/api/checkout/checkout").send(stripe)
  });
});
