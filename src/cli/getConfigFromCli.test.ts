import { cleanTestDir, setPromptMock } from "../../testUtils";
import { defaultConfig } from "../constants";
import getConfigFromCli from "./getConfigFromCli";

describe("getConfigFromCli", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  it("when CLI args provided, then returns config with those values", async () => {
    const sillyCliArgs = {
      template: "a",
      name: "b",
      description: "c",
      author: "d",
      projectDir: "e",
    };
    const results = await getConfigFromCli(sillyCliArgs);

    expect(results).toEqual(sillyCliArgs);
  });

  it("when no CLI args provided, then returns config with default values", async () => {
    const emptyCliArgs = {};
    const results = await getConfigFromCli(emptyCliArgs);

    expect(results).toEqual(defaultConfig);
  });
});
