# snowpack-plugin-baseUrl-handler
This snowpack plugin will handler the baseUrl. This to make it possible to run several snowpack applications under one and same domain. 

## Usage
Add `%BASE_URL%` before web urls to the applications public folder. Ex.

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="icon" href="%BASE_URL%/favicon.ico" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="%BASE_URL%/_dist_/index.js"></script>
  </body>
</html>

```

#### js
```js
const MyImage = () => <img src="%BASE_URL%/my-image.jpg" />

```

## Configure


#### snowpack.config.js
```js
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

**Note: The plugin will override baseurl configuration with the value `''` when running in `dev` mode**
