const { spawn } = require("node:child_process");
const path = require("node:path");

const appIp = process.env.APP_IP;
const appPort = process.env.APP_PORT;

if (!appIp || !appPort) {
  console.error("Missing APP_IP or APP_PORT env vars.");
  process.exit(1);
}

const nextBin = path.join(__dirname, "node_modules", ".bin", "next");

const child = spawn(
  nextBin,
  ["start", "-p", String(appPort), "-H", String(appIp)],
  {
    stdio: "inherit",
    env: process.env,
  },
);

child.on("exit", (code) => process.exit(code ?? 0));
child.on("error", (err) => {
  console.error(err);
  process.exit(1);
});

