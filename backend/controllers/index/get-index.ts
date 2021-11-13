import { Request, Response } from "express";

const getIndex = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
};

export { getIndex };
