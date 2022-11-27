/* eslint-disable */
const request = require('supertest');
const app = require('../app/index');
require('dotenv').config()



describe('API Register', () => {
    it('success register', async () => {
      const user = {
        email:"bajulkolep@gmail.com",
        password:"kimochi",
        username: "re0",
        roleId: "3",
        NIK: "012345678",
        phoneNumber: "01234567", 
        addres: "rumahku dimana no 10",
        countryCode: "62"
    };
      const response = await request(app).post('/api/register').send(user);
      expect(response.statusCode).toBe(201);
    });
  });