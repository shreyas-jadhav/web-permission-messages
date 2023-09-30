import platform from "platform";
import messages from "./messages";
export type Funcionality = "microphone" | "location";

export function getPermissionMessages(
  functionality: Funcionality,
  // options
  {
    purpose,
    locale = "en",
  }: {
    purpose?: string;
    locale?: "en" | "es";
  }
) {
  // detect platform and browser

  const message = messages(locale)[functionality] || undefined;

  if (!message) {
    return {
      deniedMessage: `Permission to ${functionality} was denied.`,
      purpose:
        purpose ||
        `Please allow access to the ${functionality} to use this feature.`,
      steps: [],
    };
  }

  const platformMessages = message.steps.sort((a, b) =>
    calculateScore(a.platform, a.browser) >
    calculateScore(b.platform, b.browser)
      ? -1
      : 1
  );

  console.log(platformMessages);
  return {
    deniedMessage: message.deniedMessage,
    steps: platformMessages[0].steps,
  };
}

function calculateScore(p: string, b: string) {
  const currentOs = platform.os?.family?.toString().toLowerCase();

  const currentBrowser = platform.name?.toLowerCase();

  let score = 0;

  if (currentOs?.includes(p)) {
    score += 1;
  }
  if (currentBrowser?.includes(b)) {
    score += 1;
  }
  return score;
}
