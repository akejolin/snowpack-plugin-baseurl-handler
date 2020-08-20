

const plugin:object = (snowpackConfig:object, pluginOptions:object) => {
  const { appBaseUrl}:any = pluginOptions;
  const { baseUrl }:any = snowpackConfig
  let isDev:boolean = true;

  return {
    name: 'snowpack-plugin-baseurl-handler',
    async run(options:any) {
      isDev = !!options.isDev;
    },
    
    async transform({fileExt, contents}:any) {
      if (baseUrl) {
        return contents.replace(/%BASE_URL%/gi, ``)
      }
      let _appBaseurl:string = !isDev && appBaseUrl && appBaseUrl !== '/' ? `/${appBaseUrl}` : ''

      const testFileExt:Array<string>= ['.html', '.js', '.jsx', '.css', '.txt']

      if (testFileExt.find(fileExt)) {
        return contents.replace(/%BASE_URL%/gi, `${_appBaseurl  }`)
      }
      //return null
    },
    
  };
}
export default plugin;
