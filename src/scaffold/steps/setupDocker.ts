import runStep from "./runStep";

function setupDocker(name: string, projectDir: string) {
  runStep(`docker build -t ${name} .`, "Building docker image with `docker build`", projectDir);
  runStep(`docker run ${name}`, "Building docker image with `docker build`", projectDir);
}

export default setupDocker;
