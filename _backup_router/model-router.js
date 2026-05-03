/**
 * Simple AI model router for web development
 * Chooses best model based on task type
 */

export function selectModel(taskType = "ui") {
  switch (taskType) {

    // Fast UI + React + HTML + CSS
    case "ui":
    case "frontend":
    case "styling":
      return "meta-llama/llama-3.1-8b-instruct:free";

    // Logic, architecture, planning
    case "reasoning":
    case "architecture":
      return "nvidia/nemotron-3-super-120b-a12b:free";

    // Bugs, errors, debugging
    case "debug":
      return "openai/gpt-4o-mini";

    // Default fallback (safe + fast)
    default:
      return "meta-llama/llama-3.1-8b-instruct:free";
  }
}

/**
 * Optional escalation if model fails
 */
export function fallbackChain() {
  return [
    "meta-llama/llama-3.1-8b-instruct:free",
    "mistralai/mistral-7b-instruct:free",
    "nvidia/nemotron-3-super-120b-a12b:free",
    "openai/gpt-4o-mini"
  ];
}