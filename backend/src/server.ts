import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

const app = express();
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  });
});

app.listen(8080, () => console.log("Server Online"));