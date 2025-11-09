import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let submissions: any[] = [];
    let data;

    data = req.body;
    const submission = { ...data, createdAt: new Date().toISOString() };
    submissions.push(submission);
    res.status(200).send(submissions);
}
