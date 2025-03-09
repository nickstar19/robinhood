const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes');
const locationRoutes = require('./routes/location-routes');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 4000;
const dbUrl = process.env.DB_URL;
app.use("/user",userRoutes);
app.use("/admin",adminRoutes)
app.use("/location",locationRoutes);
mongoose.connect(dbUrl)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at Port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error);
    })


module.exports = app;