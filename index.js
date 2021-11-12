/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (/*opts = {}*/) => {
  // Work with options here

  return {
    postcssPlugin: "postcss-coglang-stylesheets",
    /*
    Root (root, postcss) {
      // Transform CSS AST here
    }
    */

    /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */

    Once: function (css /*postcss*/) {
      css.walkDecls(function (decl) {
        decl.prop = decl.prop.replace("dzwoskyer", "left");
        decl.prop = decl.prop.replace("derdah", "right");
      });
    },
  };
};

module.exports.postcss = true;
