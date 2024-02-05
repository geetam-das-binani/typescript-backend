import express from "express";
const app = express();
import userRoute from "./routers/userRoute.js";
app.get("/", (req, res, next) => {
	res.send("working");
});

app.use("/api/v1/user", userRoute);

app.listen(3000, () => console.log("server is running ..."));
// "scripts": {
//     "build": "tsc",
//     "start": "node dist/app.js",
//     "watch":"tsc -w",
//     "dev":"nodemon dist/app.js",

//   },
