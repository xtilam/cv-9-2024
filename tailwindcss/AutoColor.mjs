export class AutoColor {
  #mainColor = "";
  #lightColor = "";
  #darkColor = "";
  #colorName = "color";

  auto(tailwindColor, colorIdx, lightInc = -100, darkInc = 100) {
    this.#mainColor = tailwindColor[colorIdx];
    this.#lightColor = tailwindColor[colorIdx + lightInc];
    this.#darkColor = tailwindColor[colorIdx + darkInc];
    return this;
  }
  get mainColor() {
    return this.#mainColor;
  }
  get lightColor() {
    return this.#lightColor;
  }
  get darkColor() {
    return this.#darkColor;
  }
  get colorName() {
    return this.#colorName;
  }
  get darkerColorName() {
    return this.#colorName + "-dark";
  }
  get lighterColorName() {
    return this.#colorName + "-light";
  }
  setLight(color) {
    this.#lightColor = color;
    return this;
  }
  setDark(color) {
    this.#darkColor = color;
    return this;
  }
  getDefine() {
    return {
      [this.colorName]: this.mainColor,
      [this.lighterColorName]: this.lightColor,
      [this.darkerColorName]: this.darkColor,
    };
  }
  setName(colorName) {
    this.#colorName = colorName;
  }
}
