import { makeRequest } from "../src/utils/httpClient";
import axios from "axios";

describe("sendMessage API", () => {
  const validPayload = {
    chatId: "79999999999@c.us",
    message: "Привет от автотеста",
  };

  it("should return 200 when valid payload is sent", async () => {
    const res = await makeRequest("post", "sendMessage", validPayload);
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("idMessage");

    await new Promise((res) => setTimeout(res, 1000)); // 🔄 задержка
  });

  it("should return 400 when chatId is missing", async () => {
    const invalidPayload = {
      message: "no chatId",
    };

    try {
      await makeRequest("post", "sendMessage", invalidPayload);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        expect(error.response?.status).toBe(400);
      } else {
        throw error;
      }
    }

    await new Promise((res) => setTimeout(res, 1000)); // 🔄 задержка
  });
});
