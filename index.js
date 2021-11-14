import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { v4 as uuid } from "uuid";

//components
import Connection from "./database/Db.js";
import DefaultData from "./Default.js";
import Routes from "./routes/Routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Server is Running in Port: ${PORT}`));

//default data to database
DefaultData();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "http:localhost:8000/callback";
paytmParams["EMAIL"] = "prabakaranpkv@gmail.com";
paytmParams["MOBILE_NO"] = "1234567898";
