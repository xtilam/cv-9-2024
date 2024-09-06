import { Config } from "tailwindcss";

export class BaseApply {
  /**
   *
   * @param {Config} config
   */
  constructor(config) {
    this.config = config;
  }
  /**
   *
   * @param  {string[]} css
   */
  twJoin = (...css) => {
    return {
      [`@apply ${css.filter((css) => css).join(" ")}`]: {},
    };
  };
  apply() {}
  /**
   * @param {(api: import("tailwindcss/types/config").PluginAPI)=>any} callback
   */
  addPlugin(callback) {
    const plugins = this.config.plugins || (this.config.plugins = []);
    plugins.push(callback);
  }
}
