import express from "express";
import { login, signup } from "../controller/user.controller.js";
const router =express.Router();

router.post("https://bookstore-backend-seven-chi.vercel.app/signup",signup);
router.post("https://bookstore-backend-seven-chi.vercel.app/login",login)

export default router;