import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

export const errorMiddleware = async (err: Error, req: Request, res: Response, _: NextFunction) => {

  console.log('erro========= entrou ==========> ', err);


  if (err instanceof AppError) {

    return res.status(err.statusCode).json({ error: err.message });
  }

  return res.status(500).json({ error: "Internal server error ", message: err.message });
}