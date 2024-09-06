import { Config } from "tailwindcss";
import { ApplyColors } from "./ApplyColors.mjs";
import { ApplyButton } from "./ApplyButton.mjs";
import { ApplyOther } from "./ApplyOther.mjs";

/**
 *
 * @param {Config} config
 */
export const applyTailwind = (config) => {
  try {
    new ApplyColors(config).apply();
    new ApplyButton(config).apply();
    new ApplyOther(config).apply();
  } catch (error) {
    console.log(error);
  }
  return config;
};
