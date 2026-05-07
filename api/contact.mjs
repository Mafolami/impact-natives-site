import { Resend } from "resend";

const resend = new Resend(process.env.re_YbhhwGiG_9ac2fDhw4zs6h5WJdDBAK3SU);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false });

  const { institution, inquiry, context } = req.body || {};

  try {
    await resend.emails.send({
      from: "contact@impactnatives.com",
      to: "impactnativesltd@gmail.com",
      subject: "New Brief Submission",
      html: `
        <p><b>Institution:</b> ${institution}</p>
        <p><b>Inquiry:</b> ${inquiry}</p>
        <p><b>Context:</b> ${context}</p>
      `,
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Resend error:", e);
    return res.status(500).json({ ok: false, error: String(e) });
  }
}