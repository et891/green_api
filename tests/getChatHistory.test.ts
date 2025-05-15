import { makeRequest } from "../src/utils/httpClient";
import axios from "axios";

describe("sendMessage API", () => {
  const payload = {
    chatId: "79999999999@c.us",
    message: "Привет от автотеста",
  };

  it("should return 200 for valid message", async () => {
    const res = await makeRequest("post", "sendMessage", payload);
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("idMessage");
  });

  it("should return 400 for missing chatId", async () => {
    try {
      await makeRequest("post", "sendMessage", { message: "тест" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        expect(error.response?.status).toBe(400);
      } else {
        throw error;
      }
    }
  });
});
