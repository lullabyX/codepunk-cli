import { serve } from "codepunk-local-api";
import { Command } from "commander";
import path from "path";
export const serveCommand = new Command("serve")
  .command("serve [filepath]")
  .description("Open cudepunk file in codepunk local client")
  .option(
    "-p, --port <number>",
    "port number to open local client in the browser",
    "4005"
  )
  .action((filepath, { port }) => {
    const dir = path.join(process.cwd(), path.dirname(filepath));
    const filename = path.basename(filepath);
    serve(filename, parseInt(port), dir);
  });
