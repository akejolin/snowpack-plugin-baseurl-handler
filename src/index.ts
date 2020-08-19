import type { SnowpackPluginFactory } from "snowpack";

const plugin: SnowpackPluginFactory = () => {

  let isDev:boolean = true;

  return {
    name: 'snowpack-plugin-baseurl-handler',
    input: [".js"],
    async run(options:any) {
      isDev = !!options.isDev;
    },
    async transform({fileExt, contents}:any) {

      let _baseurl = !isDev && process.env.BASE_URL && process.env.BASE_URL !== '/' ? `/${process.env.BASE_URL}` : ''

      const testFileExt:Array<string>= ['.html', '.js', '.jsx', '.css', '.txt']

      if (testFileExt.find(fileExt)) {
        return contents.replace(/%BASE_URL%/gi, `${_baseurl}`)
      }
    },
  };
}
export default plugin;
