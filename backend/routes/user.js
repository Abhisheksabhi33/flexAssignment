import express from "express";
import { userRegistration, userPayment, userBatchChange, getUserdetails } from "../controller/user.js";

const router = express.Router();

router.post("/registration", userRegistration);

router.post("/payment", userPayment);

router.patch('/changeBatch' , userBatchChange);

router.get("/getDetails", getUserdetails);

export { router as userRouter, router as enrollmentRouter };
