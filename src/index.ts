import type { SnowpackPluginFactory } from "snowpack";
import pkg from '../package.json'
const plugin: SnowpackPluginFactory = () => ({
  name: pkg.name,
  input: [".js"],
  async build({ contents, fileExt, filePath, isDev }: any) {
    console.table({ contents, fileExt, filePath, isDev });
    return contents;
  },
});

export default plugin;
