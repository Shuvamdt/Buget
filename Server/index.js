import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
import passport from "passport";
import axios from "axios";
import cors from "cors";
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth2";
import session from "express-session";
import bcryptjs from "bcryptjs";

const app = express();
const port = 3000;
dotenv.config();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/budget", (req, res) => {
  const total = req.body.total;
  const liabilities = req.body.liabilities;
  const targetSavings = req.body.targetSavings;
  const days = req.body.days;
  const budgetPerDay = (total - targetSavings) / days;
});

app.listen(port, (req, res) => {
  console.log(`Server is listening to ${port}`);
});
