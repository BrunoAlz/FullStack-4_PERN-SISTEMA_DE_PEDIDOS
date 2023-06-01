import { Router, Request, Response } from "express";
import { UserController } from "./controllers/user/UserController";

const router = Router();

router.post("/user/create", new UserController().create);

export { router };

// router.get("/test", (req: Request, res: Response) => {
//   return res.json({
//     response: {
//       route: "http://localhost:8080/test",
//       method: "GET",
//       message: "Server Working" },
//   });
// });
