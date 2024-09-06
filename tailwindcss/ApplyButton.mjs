import { BaseApply } from "./BaseApply.mjs";
import { ApplyColors } from "./ApplyColors.mjs";

export class ApplyButton extends BaseApply {
  apply() {
    const { twJoin } = this;
    this.addPlugin((api) => {
      api.addComponents({
        ".hover-scale": twJoin("hover:scale-[1.02] duration-100 transition-all"),
        ".btn": twJoin(
          "font-medium px-4 py-1 block text-center rounded shadow-md duration-100 outline-none hover-scale",
        ),
        ".btn-disabled": twJoin(
          "disabled:text-white disabled:!bg-disabled disabled:!shadow-none disabled:!transform disabled:!scale-[1] disabled:!cursor-not-allowed",
        ),
      });
      Object.values(ApplyColors.colorConfig).forEach(({ darkerColorName, colorName }) => {
        api.addComponents({
          [`.btn-${colorName}`]: twJoin(
            `text-white btn bg-${colorName}`,
            `hover:bg-${darkerColorName}`,
            `btn-disabled`,
          ),
          [`.btn-outline-${colorName}`]: {
            ...twJoin(
              `btn text-${colorName} bg-white shadow-${colorName}`,
              `hover:text-white hover:bg-${colorName} hover:shadow-none btn-disabled`,
              "shadow-[inset_0_0_0_2px]",
            ),
          },
        });
      });
    });
  }
}
