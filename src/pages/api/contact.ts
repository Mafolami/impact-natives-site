import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers (THIS FIXES YOUR ERROR)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { institution, inquiry, context } = req.body;

  if (!institution || !inquiry || !context) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "Impact Natives <onboarding@resend.dev>",
      to: "impactnativesltd@gmail.com",
      subject: "New Brief Submission",
      html: `
        <p><b>Institution:</b> ${institution}</p>
        <p><b>Inquiry:</b> ${inquiry}</p>
        <p><b>Context:</b> ${context}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Email failed" });
  }
}