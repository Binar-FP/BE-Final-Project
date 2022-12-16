/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
const path = require('path');
const { faker } = require('@faker-js/faker');
require("dotenv").config();

describe("API Users", () => {
  it("success get all users", async () => {
    const response = await request(app).get("/api/users/findAll");
    expect(response.statusCode).toBe(200);
  });
  it("failed get all users", async () => {
    const response = await request(app).get("/api/users/findAl");
    expect(response.statusCode).toBe(404);
  });
});

describe("API Users", () => {
  it("success get by id users", async () => {
    const Idusers = {
      id: 1,
    };
    const response = await request(app).get(`/api/users/findById/${Idusers.id}`);
    expect(response.statusCode).toBe(200);
  });
});

describe("API Users", () => {
  it("update by id Users", async () => {
    const picture = path.resolve(__dirname, './person.jpg');
    const idUser = {
      Id: 1,
    }
    const response = await request(app).put(`/api/users/update/${idUser.Id}`).field('address', 'Tegal, Jawa Tengah').field('lastName', faker.name.lastName()).attach('image', picture);
    expect(response.statusCode).toBe(200);
  });
  it("failed update by id Users", async () => {
    const picture = path.resolve(__dirname, './hello.txt');
    const idUser = {
      Id: 1,
    }
    const response = await request(app).put(`/api/users/update/${idUser.Id}`).field('address', 'Tegal, Jawa Tengah').field('lastName', faker.name.lastName()).attach('image', picture);
    expect(response.statusCode).toBe(400);
  });
});

