import axios from "axios";

const carMakeApi =
  " https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/2cc008b9-dce4-47d0-b564-b136defda947/detect/iterations/carMakeIteration7/image";
const carModelApi =
  "https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/d2f42496-7b60-4fc7-97a5-f3bd070ec545/detect/iterations/carModelIteration3/image";
const predictionKey = "fc3396495c99401fbdb0f6593a944298";


export const carMakeSearcher = async (buffer: Buffer) => {
  const res = await axios.post(carMakeApi, buffer, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Prediction-Key": predictionKey,
    },
  });
  return res.data;
};

export const carModelSearcher = async (buffer: Buffer) => {
  const res = await axios.post(carModelApi, buffer, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Prediction-Key": predictionKey,
    },
  });
  return res.data;
};
