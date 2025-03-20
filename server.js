require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`));
