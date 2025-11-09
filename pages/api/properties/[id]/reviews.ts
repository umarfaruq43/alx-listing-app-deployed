import { review } from "@/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const reviews = review;
    const maniData = reviews.filter((item) => item?.id === id);
    res.status(200).json(maniData);
}
