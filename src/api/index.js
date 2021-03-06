import axios from "axios";
const BASE_URL = "https://api.lifx.com/v1/lights/";
const token = process.env.REACT_APP_LIFX_TOKEN;

// returns object with all lights and data

export const getAllLights = async () => {
  console.log(token);
  try {
    const { data: lights } = await axios.get(`${BASE_URL}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(lights);
  } catch (error) {
    console.error("Error getting lights");
    console.error(error);
  }
};

export const updateLight = async (id, colors) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${id}/state`,
      {
        power: "on",
        color: `rgb:${colors.r},${colors.g},${colors.b}`,
        brightness: 0.3,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log({ response });
    return response;
  } catch (error) {
    console.error("Error updating light");
    console.error(error);
  }
};
