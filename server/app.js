const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors')
const router = require("./routes/router");
require("./db/conn");
const port = process.env.PORT ||  8000;

app.use(express.json());
app.use(cookieParser(""));
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        optionsSuccessStatus: 200,
        credentials: true
    }
))
app.use(router);
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}
app.listen(port,"0.0.0.0",()=>{
    console.log(`your server is running on port ${port} `);
});
