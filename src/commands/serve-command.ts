import { serve } from "@codepunk/local-api";
import { Command } from "commander";
import path from "path";

interface LocalApiError {
  code: string;
}

const isProduction = process.env.NODE_ENV === "production";

export const serveCommand = new Command("serve")
  .command("serve [filepath]")
  .description("Open cudepunk file in codepunk local client")
  .option(
    "-p, --port <number>",
    "port number to open local client in the browser",
    "4005"
  )
  .action(async (filepath = "notebook.js", { port }: { port: string }) => {
    const dir = path.join(process.cwd(), path.dirname(filepath));
    const filename = path.basename(filepath);
    const isLocalApiError = (error: any): error is LocalApiError => {
      return typeof error.code === "string";
    };
    try {
      await serve(filename, parseInt(port), dir, !isProduction);
      console.log(
        `Server started. Visit http://localhost:${port} to view the notebook: ${filename}`
      );
    } catch (error) {
      if (isLocalApiError(error)) {
        if (error.code === "EADDRINUSE") {
          console.log(
            `Port ${port}${
              port === "4005" ? "(default)" : ""
            } is already in use. Please start again with different port with --port <portnumber> option.`
          );
        } else if (error instanceof Error) {
          console.log(`Error occured for: ${error.message}`);
        }
      }
      process.exit(1);
    }
  });
