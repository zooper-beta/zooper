import yargs from "https://deno.land/x/yargs@v16.0.3-deno/deno.ts";
import { resolve } from "https://deno.land/std/path/mod.ts";
import { YargsType } from "https://deno.land/x/yargs@v16.0.3-deno/types.ts";
import { launchEditor } from "../editor/launch-editor.ts";

async function runCLI(): Promise<void> {
  console.log("...", Deno.args);
  yargs()
    .command(
      "editor [PROJECT_FILE]",
      "download a list of files",
      (yargs: YargsType) => {
        return yargs.positional("[PROJECT_FILE]", {
          describe: "The zooper config file",
        });
      },
      (argv: any) => {
        const profileFile = resolve(Deno.cwd(), argv["PROJECT_FILE"]);
        launchEditor({
          projectFile: profileFile,
          clientPort: 8030,
          apiPort: 8040,
        });
      }
    )
    .strictCommands()
    .demandCommand(1)
    .parse(Deno.args);
}

if (import.meta.main) {
  runCLI();
}
