/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();

let accessToken = '';

// beforeAll(async () => {
//   const googleLogin = {
//     accessToken: "ya29.a0AeTM1ifgW9k0hnHdM1oGhPcxM9RKXZpVGqUHL1U_Pu-C2MS3rEyQdEsQ8NrmSCTJv0rgMh26b2-QPtLzVCQk9d8sEeeY5mS0TU11HiGuX5OAYChG-XS_krw5qGF-IwvcRAm89b9YoknsERxZM2NkAT2Y4zVcEQaCgYKAYwSARMSFQHWtWOmMa1mM2iSVNA9R1tOMkj91Q0165"
//   };
//   const response = await request(app).post("/api/google").send(googleLogin);
//   expect(response.statusCode).toBe(201);
//   accessToken = response.body.accessToken
// });

describe("API Login Google", () => {
  it("success login with google", async () => {
    const googleLogin = {
      accessToken: "ya29.a0AeTM1ifgW9k0hnHdM1oGhPcxM9RKXZpVGqUHL1U_Pu-C2MS3rEyQdEsQ8NrmSCTJv0rgMh26b2-QPtLzVCQk9d8sEeeY5mS0TU11HiGuX5OAYChG-XS_krw5qGF-IwvcRAm89b9YoknsERxZM2NkAT2Y4zVcEQaCgYKAYwSARMSFQHWtWOmMa1mM2iSVNA9R1tOMkj91Q0165"
    };
    const response = await request(app).post("/api/google").send(googleLogin);
    expect(response.statusCode).toBe(201);
  });
});