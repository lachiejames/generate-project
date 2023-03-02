import runStep from "./runStep";

function setupDocker(projectName: string, projectDir: string) {
  runStep(`docker build -t ${projectName} .`, "Building docker image with `docker build`", projectDir);
  runStep(`docker run ${projectName}`, "Building docker image with `docker build`", projectDir);
}

export default setupDocker;
