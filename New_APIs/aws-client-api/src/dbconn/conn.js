const mongoose = require("mongoose");


async function conn() {

    try{ 
        await mongoose.connect(uri);
        console.log("Connection successful");
        return;
    }catch(e) {
        console.log(e.message);
    }
}

module.exports = conn;