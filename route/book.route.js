import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();
router.get("https://bookstore-backend-seven-chi.vercel.app/", getBook);

export default router