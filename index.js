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
        decl.prop = decl.prop.replace("tsvatkol", "color");

        decl.value = decl.value.replace("ahmal", "red");
        decl.value = decl.value.replace("velih", "green");
        decl.value = decl.value.replace("asul", "blue");

        decl.value = decl.value.replace("!djonpor", "!important");
        // if (decl.value.indexOf("!djonpor") >= 0) {
        //   decl.value = decl.value.replace(/\s*!djonpor\s*/, "");
        //   decl.important = true;
        // }
      });
    },
  };
};

module.exports.postcss = true;
