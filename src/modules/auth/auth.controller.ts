import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  register = async (req: Request, res: Response) => {
    const {username,name,email, password}=req.body;
    const result = await this.authService.register(username,name,email, password);

    res.status(201).json({
      success: true,
      data: result,
    });
  };

  login = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    const token = await this.authService.login(username,password);

    res.json({
      success: true,
      token,
    });
  };
}
