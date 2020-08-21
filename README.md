# snowpack-plugin-baseUrl-handler
This snowpack plugin will handler the baseUrl. This to make it possible to run several snowpack applications under one and same domain.


## Configure


#### snowpack.config.js
```


module.exports = {
  plugins: [
    ["snowpack-plugin-baseurl-handler", {
      exts: [".html", ".js", ".jsx", ".css"], // Wanted file extensions to be affected
      baseUrl: '/my-custom-base-url', // web url path where root of the snowpack app is located
      debug: true, // Debug output during build process.
    }],
  ],
}
```
