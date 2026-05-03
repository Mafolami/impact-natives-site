/**
 * AUTO MODEL ORCHESTRATOR
 * - Detects task type automatically
 * - Selects best model
 * - Falls back on failure
 */

// ---------- 1. TASK DETECTOR ----------
export function detectTask(prompt) {
  const p = prompt.toLowerCase();

  // UI / frontend signals
  if (
    p.includes("react") ||
    p.includes("component") ||
    p.includes("tailwind") ||
    p.includes("css") ||
    p.includes("ui") ||
    p.includes("layout")
  ) return "ui";

  // Debug signals
  if (
    p.includes("error") ||
    p.includes("bug") ||
    p.includes("fix") ||
    p.includes("not working") ||
    p.includes("stack trace")
  ) return "debug";

  // Architecture / reasoning
  if (
    p.includes("design") ||
    p.includes("architecture") ||
    p.includes("system") ||
    p.includes("structure") ||
    p.includes("plan")
  ) return "reasoning";

  return "ui"; // default optimized for your use case (web dev)
}

// ---------- 2. MODEL SELECTOR ----------
export function selectModel(task) {
  switch (task) {
    case "ui":
      return "meta-llama/llama-3.1-8b-instruct:free";

    case "reasoning":
      return "nvidia/nemotron-3-super-120b-a12b:free";

    case "debug":
      return "openai/gpt-4o-mini";

    default:
      return "meta-llama/llama-3.1-8b-instruct:free";
  }
}

// ---------- 3. AUTO PIPELINE ----------
export async function runAutoModel(prompt, callAPI) {
  const task = detectTask(prompt);
  const modelChain = [
    selectModel(task),
    "meta-llama/llama-3.1-8b-instruct:free",
    "mistralai/mistral-7b-instruct:free",
    "openai/gpt-4o-mini"
  ];

  let lastError;

  for (const model of modelChain) {
    try {
      const result = await callAPI({
        model,
        prompt
      });

      return {
        modelUsed: model,
        taskDetected: task,
        result
      };
    } catch (err) {
      lastError = err;
      continue;
    }
  }

  throw lastError;
}