import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  throw new Error("api hello error");
  res.json({
    message: "Hello, World!",
  });
}
