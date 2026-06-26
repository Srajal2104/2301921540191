import { logger } from "../middleware/logger";

const BASE_URL = "http://localhost:8080";

export const sendNotification = async (notification) => {
  logger("Sending notification", notification);

  const response = await fetch(`${BASE_URL}/notifications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notification),
  });

  return await response.json();
};


export const getNotifications = async () => {
  logger("Fetching notifications");

  const response = await fetch(`${BASE_URL}/notifications`);

  return await response.json();
};