import express from "express";
import OderController from "../controller/oder.controller.js";
const oderRouter = express.Router();
const oderController = new OderController()

// API Oders

oderRouter.get("/", (req, res) => oderController.getDataOder);

export default oderRouter;
