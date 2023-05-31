import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.post("/user/create", new CreateUserController().handleCreation);


export { router };


// router.get("/test", (req: Request, res: Response) => {
//   return res.json({
//     response: {
//       route: "http://localhost:8080/test",
//       method: "GET",
//       message: "Server Working" },
//   });
// });
