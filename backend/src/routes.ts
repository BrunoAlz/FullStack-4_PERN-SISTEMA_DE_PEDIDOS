import { Router, Request, Response } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  return res.json({
    response: { 
      route: "http://localhost:8080/test", 
      method: "GET", 
      message: "Server Working" },
  });
});

export { router };