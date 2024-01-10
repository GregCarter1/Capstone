import { Router } from "express";
import Contact from "../models/message.js";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const newMessage = new Contact(request.body);

    const data = await newMessage.save();

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

    const data = await Contact.find(query);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const data = await Contact.findById(request.params.id);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const data = await Contact.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Contact.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          fullName: body.fullName,
          email: body.email,
          phone: body.phone,
          message: body.message
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
