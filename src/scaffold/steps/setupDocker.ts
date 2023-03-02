import runStep from "./runStep";

function setupDocker(projectName: string, projectDir: string) {
  runStep(`docker build -t ${projectName} .`, `Building docker image with \`docker build -t ${projectName} .\``, projectDir);
  runStep(`docker run ${projectName}`, `Running docker image with \`docker run ${projectName}\``, projectDir);
}

export default setupDocker;
