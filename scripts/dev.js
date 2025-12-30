import open from "open";
import { spawn } from "child_process";

const NEXT_PORT = 4000;        // Port Next.js
const SWAGGER_URL = "http://localhost:8080/swagger-ui/index.html#/"; // Swagger backend

// Mở browser sau khi server Next khởi chạy
// 1. Chạy Next dev
const child = spawn("npx", ["next", "dev", "--port", NEXT_PORT.toString()], {
  stdio: "inherit",
  shell: true,
});

// 2. Khi Next dev khởi chạy, mở tab browser
//    Thông thường Next khởi chạy ngay, nên open luôn cũng ok
open(`http://localhost:${NEXT_PORT}`);
open(SWAGGER_URL);

child.on("close", (code) => {
  process.exit(code);
});
