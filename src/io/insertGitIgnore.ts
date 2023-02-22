import fs from "fs-extra";
import path from "path";

const GITIGNORE_CONTENTS = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
**/.idea/**
**/.vscode/**
**/coverage/**
**/dist/**
**/node_modules/**

.DS_Store
.env
`;

/**
 * `npm pack` forcibly excludes .gitignore files, and there is no way to override this.
 * So we insert it as a post-scaffold step
 *
 * @param projectDir The directory of the project
 */
function insertGitIgnore(projectDir: string): void {
  const outputFilePath = path.join(projectDir, ".gitignore");
  fs.outputFileSync(outputFilePath, GITIGNORE_CONTENTS);
}

export default insertGitIgnore;
