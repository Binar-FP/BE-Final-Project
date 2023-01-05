/* eslint-disable */
const request = require("supertest");
const app = require("../app/index");
require("dotenv").config();
const { addNotification } = require("../app/controllers/notificationController")

describe("API Notification", () => {
  it('success Add Notification', () => {
    const notification = addNotification(true, 1, 1);
    const dataNotification = notification;
    dataNotification.then(function (result) {
      expect(result.status).toBe(true);
    });
  });
  it("Failed add notification", async () => {
    expect(addNotification(Error));
  });
});

describe("API Notification", () => {
  it("success update notification", async () => {
    const updatenotification = {
      "historyId": 1,
      "status": true,
    }
    const response = await request(app).put(`/api/notification/update`).send(updatenotification);
    expect(response.statusCode).toBe(200);
  });
  it("failed update notification", async () => {
    const updatenotification = {
      "historyId": "a",
      "status": true,
    }
    const response = await request(app).put(`/api/notification/update`).send(updatenotification);
    expect(response.statusCode).toBe(500);
  });
});

describe("API Notification", () => {
  it("update All notification", async () => {
    const updateallnotification = {
      "userId": 1,
      "status": true,
    }
    const response = await request(app).put(`/api/notification/updateAll`).send(updateallnotification);
    expect(response.statusCode).toBe(200);
  });
  it("failed update All notification", async () => {
    const updateallnotification = {
      "userId": "a",
      "status": true,
    }
    const response = await request(app).put(`/api/notification/updateAll`).send(updateallnotification);
    expect(response.statusCode).toBe(500);
  });
});