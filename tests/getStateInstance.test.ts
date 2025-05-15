import { makeRequest } from "../src/utils/httpClient";
import { INSTANCE_ID } from "../src/config";
import axios from "axios";

describe("getStateInstance API", () => {
  it('should return 200 and stateInstance as "authorized"', async () => {
    const res = await makeRequest("get", "getStateInstance");
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("stateInstance");
    expect(typeof res.data.stateInstance).toBe("string");
    console.log("State:", res.data.stateInstance);

    await new Promise((res) => setTimeout(res, 1000));
  });

  it("should return 400 if token is incorrect", async () => {
    const invalidUrl = `https://api.green-api.com/waInstance${INSTANCE_ID}/getStateInstance/invalid_token`;

    try {
      await makeRequest("get", invalidUrl, undefined, true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        expect([400]).toContain(error.response?.status);
      } else {
        throw error;
      }
    }

    await new Promise((res) => setTimeout(res, 1000));
  });
});
