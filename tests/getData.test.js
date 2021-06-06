const request = require("supertest");
const app = require("../server/server");
const code = "123456";
describe("GET /get_data", () => {
  it("responds with json", async () => {
    const res1 = await request(app).get(`/get_token/:${code}`);
    // console.log("res1.text", res1.text);
    const token = res1.text;
    console.debug(token);
    const res2 = await request(app)
      .get("/get_data")
      .set("Authorization", `Bearer ${token}`);
    expect(res2.statusCode).toEqual(200);
    console.debug(res2.text);
  });
});
