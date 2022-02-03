const express = require("express");
const userRouter = require("./router/user_router");
const mainRouter = require("./router/main_router");
const fehlerRouter = require("./router/fehler_router");

const PORT = process.env.PORT || 4025;

const app = express();


app.use("/",mainRouter);
app.use("/user",userRouter);
app.use(fehlerRouter);




app.listen(PORT,()=>{
    console.log("Server arbeitet...");
})