import { app, request } from "../testutils";

describe("HomeController", () => {
  it("should get hello on /", async () => {
    let response = await request(app).get("/");

    expect(response.status).toBe(200);    
    expect(response.body).toEqual({ message: 'Hello from home' });
  });
});
