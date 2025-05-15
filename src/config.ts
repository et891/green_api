import dotenv from "dotenv";
dotenv.config();

export const INSTANCE_ID = process.env.INSTANCE_ID!;
export const API_TOKEN = process.env.API_TOKEN!;
export const BASE_URL = `https://api.green-api.com/waInstance${INSTANCE_ID}`;
