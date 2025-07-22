import express from "express";
import {
  convertLength,
  convertWeight,
  convertTemperature,
} from "../utils/converter.js";

const router = express.Router();

const lengthUnits = [
  "millimeter",
  "centimeter",
  "meter",
  "kilometer",
  "inch",
  "foot",
  "yard",
  "mile",
];
const weightUnits = ["milligram", "gram", "kilogram", "ounce", "pound"];
const temperatureUnits = ["celsius", "fahrenheit", "kelvin"];

router.get("/convert", (req, res) => {
  const { category, from, to, value } = req.query;

  if (category === "length" && !lengthUnits.includes(from)) {
    return res.status(400).json({ error: "Invalid length unit" });
  }
  if (category === "weight" && !weightUnits.includes(from)) {
    return res.status(400).json({ error: "Invalid weight unit" });
  }
  if (category === "temperature" && !temperatureUnits.includes(from)) {
    return res.status(400).json({ error: "Invalid temperature unit" });
  }
  if (category === "length" && !lengthUnits.includes(to)) {
    return res.status(400).json({ error: "Invalid length unit" });
  }
  if (category === "weight" && !weightUnits.includes(to)) {
    return res.status(400).json({ error: "Invalid weight unit" });
  }
  if (category === "temperature" && !temperatureUnits.includes(to)) {
    return res.status(400).json({ error: "Invalid temperature unit" });
  }
  if (isNaN(value) || value === "") {
    return res.status(400).json({ error: "Invalid value" });
  }

  if (!category || !from || !to || !value) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const numericValue = parseFloat(value);
  let result;

  if (category === "length") {
    result = convertLength(numericValue, from, to);
  } else if (category === "weight") {
    result = convertWeight(numericValue, from, to);
  } else if (category === "temperature") {
    result = convertTemperature(numericValue, from, to);
  } else {
    return res.status(400).json({ error: "Unsupported category" });
  }

  res.json({ result });
});

export default router;
