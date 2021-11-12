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

  it("leaves standard CSS names alone", async () => {
    await run("a{ color: blue; }", "a{ color: blue; }", {});
  });

  it("can translate to !important", async () => {
    await run("a{ color: red !djonpor; }", "a{ color: red !important; }", {});
  });

  it("can translate stuff", async () => {
    await run("a{ dzwoskyer: 1rem; }", "a{ left: 1rem; }", {});
    await run("a{ derdah: 2.5rem; }", "a{ right: 2.5rem; }", {});
    await run(
      "a{ dzwoskyer: 1rem; derdah: 2.5rem; }",
      "a{ left: 1rem; right: 2.5rem; }",
      {}
    );
    await run("a{ color: blue; }", "a{ color: blue; }", {});
    await run("a{ color: asul; }", "a{ color: blue; }", {});
    await run("a{ tsvatkol: asul; }", "a{ color: blue; }", {});
    await run("a{ tsvatkol: blue; }", "a{ color: blue; }", {});
    await run("a{ tsvatkol: ahmal; }", "a{ color: red; }", {});
    await run("a{ tsvatkol: velih; }", "a{ color: green; }", {});
    await run(
      "a{ tsvatkol: velih !djonpor; }",
      "a{ color: green !important; }",
      {}
    );
  });
});
