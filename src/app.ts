import express from "express";
import routes from "./routes/route";
import { authMiddleware } from "./middlewares/auth.middleware";
// import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

// 🔥 ROUTES YAHAN PLUG HOTE HAIN
app.use("/api/v1", routes);

// ❗ last middleware
// app.use(errorMiddleware);

export default app;
