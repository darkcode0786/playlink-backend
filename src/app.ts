import express from "express";
import routes from "./routes/route";
// import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

// 🔥 ROUTES YAHAN PLUG HOTE HAIN
app.use("/api", routes);

// ❗ last middleware
// app.use(errorMiddleware);

export default app;
