import app from "./app";
import { connectDB } from "./config/db";

 const startServer = async () => {
  await connectDB();
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};


export default startServer;