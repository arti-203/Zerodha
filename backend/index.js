require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// const { UserModel } = require("./model/UserModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "your_secret_key";

//const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const {HoldingsModel}=require('./model/HoldingsModel');

const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require("./model/OrdersModel");

const app = express();
app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get("/addHoldings", async (req, res) => {
//     let tempHoldings = [
//         {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.day,
//         day: item.day,
//     });

//     newHolding.save();
// });
//   res.send("Done!");
// });

// MongoDB Connection

// app.get("/addPositions", async (req, res) => {
//     let tempPositions = [
//      {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },   
//     ];
//     tempPositions.forEach((item) => {
//      let newPosition = new PositionsModel({
//          name: item.name,
//          qty: item.qty,
//         avg: item.avg,
//          price: item.price,
//          net: item.day,
//          day: item.day,
//     });

//      newPosition.save();
//  });
//    res.send("Done!");
//  });

app.get("/allHoldings", async (requestAnimationFrame, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings)
});

app.get("/allPositions", async (requestAnimationFrame, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions)
});


// 
app.post("/newOrders", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    return res.status(400).send("Missing required fields: name, qty, price, mode");
  }

  try {
    let newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    res.send("Order saved successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving order");
  }
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const UserModel = mongoose.model("User", userSchema);

//  Signup route 
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  try {
    const newUser = new UserModel({ name, email, password });
    await newUser.save();
    res.send("User registered successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error signing up");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).send("Invalid email or password");
    }

    res.send("Login successful");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


// Signup Route
// app.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;
//   if (!name || !email || !password)
//     return res.status(400).send("Please fill all fields");

//   const existingUser = await UserModel.findOne({ email });
//   if (existingUser)
//     return res.status(400).send("User already exists");

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = new UserModel({ name, email, password: hashedPassword });
//   await newUser.save();

//   res.send("User created successfully");
// });

// Login Route
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password)
//     return res.status(400).send("Please fill all fields");

//   const user = await UserModel.findOne({ email });
//   if (!user)
//     return res.status(400).send("Invalid credentials");

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch)
//     return res.status(400).send("Invalid credentials");

//   const token = jwt.sign({ id: user._id }, JWT_SECRET);
//   res.json({ token, user: { name: user.name, email: user.email } });
// });


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    
    // Start server only after DB connection
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
  });
