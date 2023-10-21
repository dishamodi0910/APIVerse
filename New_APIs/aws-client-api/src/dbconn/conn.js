const mongoose = require("mongoose");


async function conn() {

    try{ 
        await mongoose.connect(process.env.DB_URI);
        console.log("Connection successful");
        return;
    }catch(e) {
        console.log(e.message);
    }
}

module.exports = conn;