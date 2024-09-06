import { ApplyColors } from "./ApplyColors.mjs";
import { BaseApply } from "./BaseApply.mjs";

export class ApplyOther extends BaseApply {
  apply() {
    const { twJoin } = this;
    this.addPlugin(({ addComponents }) => {
      const color = (colorName) =>
        twJoin(`uppercase font-bold text-xl px-2 text-white bg-${colorName} mt-4`);

      Object.values(ApplyColors.colorConfig).forEach(({ colorName, darkerColorName }) => {
        addComponents({
          [`.section-title-${darkerColorName}`]: color(darkerColorName),
        });
      });
      addComponents({
        ".section-title": color("success"),
      });
    });
  }
}
