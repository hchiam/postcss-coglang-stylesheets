# postcss-coglang-stylesheets

[PostCSS] plugin generated from https://github.com/postcss/postcss-plugin-boilerplate

For tips, see: https://github.com/postcss/postcss/blob/main/docs/writing-a-plugin.md

[postcss]: https://github.com/postcss/postcss

```css
.foo {
  /* Input example */
  dzwoskyer: 1rem;
  derdah: 2.5rem;
}
```

```css
.foo {
  /* Output example */
  left: 1rem;
  right: 2.5rem;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-coglang-stylesheets
```

or

```sh
yarn --dev add postcss postcss-coglang-stylesheets
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-coglang-stylesheets'),
    require('autoprefixer')
  ]
}
```

## Development

```sh
npm install
npm test

# to publish:
npx clean-publish
```

[official docs]: https://github.com/postcss/postcss#usage
