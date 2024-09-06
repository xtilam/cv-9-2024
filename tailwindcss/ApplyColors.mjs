import { AutoColor } from "./AutoColor.mjs";
import { BaseApply } from "./BaseApply.mjs";
import colors from "tailwindcss/colors";

export class ApplyColors extends BaseApply {
  static colorConfig = {
    primary: new AutoColor().auto(colors.violet, 700),
    secondary: new AutoColor().auto(colors.slate, 700),
    danger: new AutoColor().auto(colors.red, 600),
    info: new AutoColor().auto(colors.sky, 600),
    warning: new AutoColor().auto(colors.orange, 500),
    success: new AutoColor().auto(colors.green, 600),
  };

  apply() {
    const extendColors = this.config.theme.extend.colors;
    const colors = ApplyColors.colorConfig;
    Object.values(colors).forEach((color) => {
      Object.assign(extendColors, color.getDefine());
    });
  }
}

Object.entries(ApplyColors.colorConfig).forEach(([key, val]) => val.setName(key));
