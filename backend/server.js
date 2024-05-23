// Importing necessary modules
const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/getRestaurants", async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required." });
  }

  try {
    console.log(latitude, longitude);
    const restaurants = await getRestaurants(latitude, longitude);
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

async function getRestaurants(latitude, longitude) {
  const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}`;

  const response = await axios.get(apiUrl);
  return response.data;
}

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
