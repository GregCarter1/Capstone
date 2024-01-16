import { Router } from "express";
import trainingLog from "../models/trainingLog.js";
// import { upperCase } from "lodash";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const newtrainingLog = new trainingLog(request.body);

    const data = await newtrainingLog.save();

    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

router.get("/", async (request, response) => {
  try {
    const query = request.query;

    const data = await trainingLog.find(query);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const data = await trainingLog.findById(request.params.id);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const data = await trainingLog.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await trainingLog.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          training: body.training,
          kata: body.kata,
          katapractice: body.katapractice,
          distance: body.distance,
          pace: body.pace,
          time: body.time,
          pushups: body.pushups,
          crunches: body.crunches,
          burpies: body.burpies,
          wallsit: body.wallsit
        }
      },
      {
        new: true
      }
    );
    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
