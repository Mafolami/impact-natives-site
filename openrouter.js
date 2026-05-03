import fetch from "node-fetch";

const API_KEY = process.env.OPENROUTER_API_KEY;

const FREE_MODEL = "nvidia/nemotron-3-super-120b-a12b:free";
const PAID_MODEL = "nvidia/nemotron-3-super-120b-a12b-20230311";

async function call(model, messages) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ model, messages })
  });

  return res.json();
}

export async function chat(messages) {
  let res = await call(FREE_MODEL, messages);

  const limited =
    res?.error?.code === 429 ||
    (res?.error?.message || "").toLowerCase().includes("limit");

  if (limited) {
    res = await call(PAID_MODEL, messages);
  }

  return res.choices?.[0]?.message?.content || res;
}