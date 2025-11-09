/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextApiRequest, NextApiResponse } from "next";

const submissions: any[] = []; // move outside to persist in memory during runtime

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const data = req.body;

        // Create new submission
        const submission = { ...data, createdAt: new Date().toISOString() };

        // Add to list
        submissions.push(submission);

        // Respond with all submissions
        return res.status(200).json(submissions);
    }

    // Handle GET requests
    if (req.method === "GET") {
        return res.status(200).json(submissions);
    }

    // Handle unsupported methods
    return res.status(405).json({ error: "Method not allowed" });
}
