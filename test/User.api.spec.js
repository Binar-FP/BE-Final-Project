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
  it("Delete User Failed Internal Server Error ", async () => {
    const Idusers = {
      id: `a`,
    };
    const response = await request(app).get(`/api/users/findById/${Idusers.id}`);
    expect(response.statusCode).toBe(500);
  });
});

describe("API Users", () => {
  it(" Succes update by id Users", async () => {
    const picture = path.resolve(__dirname, './person.jpg');
    const idUser = {
      Id: 1,
    }
    const response = await request(app).put(`/api/users/update/${idUser.Id}`).field('address', 'Tegal, Jawa Tengah').field('lastName', faker.name.lastName()).attach('image', picture);
    expect(response.statusCode).toBe(200);
  });
  it("failed update by id Users Erro Mimetype", async () => {
    const picture = path.resolve(__dirname, './hello.txt');
    const idUser = {
      Id: `a`,
    }
    const response = await request(app).put(`/api/users/update/${idUser.Id}`).field('address', 'Tegal, Jawa Tengah').field('lastName', faker.name.lastName()).attach('image', picture);
    expect(response.statusCode).toBe(400);
  });
  it("failed update by id Users Internal Server Error", async () => {
    const picture = path.resolve(__dirname, './person.jpg');
    const idUser = {
      Id: 1,
    }
    const response = await request(app).put(`/api/users/update/${idUser.Id}`).attach('image', picture).field('address', 'Tegal, Jawa Tengah').field('lastName', faker.name.lastName()).attach('image', picture);;
    expect(response.statusCode).toBe(500);
  });
});
describe("Delete API Users", () => {
  it("delete user by id", async () => {
    const idUser = {
      Id: 1,
    }
    const response = await request(app).delete(`/api/users/delete/${idUser.Id}`);
    expect(response.statusCode).toBe(200);
  });
  it("delete user by id", async () => {
    const idUser = {
      Id: `a`,
    }
    const response = await request(app).delete(`/api/users/delete/${idUser.Id}`);
    expect(response.statusCode).toBe(500);
  });
});
describe("Update Password", () => {
  it("Succes Update Password", async () => {
    const idUser = {
      Id: 1,
    }
    const update = {
      password: "akusiapa",
    }
    const response = await request(app).put(`/api/users/update-password/${idUser.Id}`).send(update);
    expect(response.statusCode).toBe(200);
  });
  it("Succes Update Password", async () => {
    const idUser = {
      Id: `a`,
    }
    const update = {
      password: "akusiapa",
    }
    const response = await request(app).put(`/api/users/update-password/${idUser.Id}`).send(update);
    expect(response.statusCode).toBe(500);
  });
});
describe("Forgot Password", () => {
  // it("Succes Forgot Password", async () => {
  //   const email = {
  //     email: "nadir@gmail.com",
  //   }
  //   const response = await request(app).post("/api/forgotpassword").send(email);
  //   expect(response.statusCode).toBe(201);
  // });
  it("Failed Forgot Password User Not Found", async () => {
    const email = {
      email: "zaki1@gmail.com",
    }
    const response = await request(app).post("/api/forgotpassword").send(email);
    expect(response.statusCode).toBe(404);
  });
  // it("Failed Forgot Password Internal Server Error", async () => {
  //   const email = {
  //     email: 1,
  //   }
  //   const response = await request(app).post("/api/forgotpassword").send(email);
  //   expect(response.statusCode).toBe(500);
  // });
});

describe("Change Password", () => {
  it("Succes Change Password", async () => {
    const idUser = {
      Id: 2,
      token: `9fd568f8-c2a4-4aa0-9517-33b0002a66731672637292639`,
    }
    const password = {
      password: "akusiapa",
    }
    const response = await request(app).post(`/api/reset-password/${idUser.Id}/${idUser.token}`).send(password);
    expect(response.statusCode).toBe(201);
  });
  it("Failed Change Password User Not Found", async () => {
    const idUser = {
      Id: 200,
      token: `9fd568f8-c2a4-4aa0-9517-33b0002a66731672637292639`,
    }
    const password = {
      password: "akusiapa",
    }
    const response = await request(app).post(`/api/reset-password/${idUser.Id}/${idUser.token}`).send(password);
    expect(response.statusCode).toBe(404);
  });
  it("Failed Change Password User Not Found", async () => {
    const idUser = {
      Id: `a`,
      token: `9fd568f8-c2a4-4aa0-9517-33b0002a66731672637292639`,
    }
    const password = {
      password: "akusiapa",
    }
    const response = await request(app).post(`/api/reset-password/${idUser.Id}/${idUser.token}`).send(password);
    expect(response.statusCode).toBe(500);
  });
});


