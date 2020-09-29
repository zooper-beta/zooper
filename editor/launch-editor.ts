// import { Config } from "https://raw.githubusercontent.com/eankeen/config/master/mod.ts";
import { dirname } from "https://deno.land/std/path/mod.ts";

type EditorLaunchConfig = {
  projectFile: string;
  authenticationModule?: string;
  clientPort?: number;
  apiPort?: number;
};

export async function launchEditor(config: EditorLaunchConfig) {
  // Load the config
  console.log('Loading config from "' + config.projectFile + '"...');
  const rootDir = dirname(config.projectFile);
  const project = JSON.parse(Deno.readFileSync(config.projectFile).toString());
  console.log("Projects", project);
}
