const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

describe("the plugin", () => {
  it("runs at all", async () => {
    await run("a{ }", "a{ }", {});
  });

  it("can translate stuff", async () => {
    await run(
      "a{ dzwoskyer: 1rem; derdah: 2.5rem; }",
      "a{ left: 1rem; right: 2.5rem; }",
      {}
    );
  });
});
