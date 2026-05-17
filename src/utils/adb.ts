// ts/utils/adbHelper.ts
import { exec } from "child_process";
import { promisify } from "util";

import { spawn } from "child_process";
import { logD, logE } from "./log.ts";

// 手机亮屏
// adb -s RFCW8014R4E shell input keyevent KEYCODE_WAKEUP
// 手机息屏
// adb -s RFCW8014R4E shell input keyevent KEYCODE_POWER

export async function executeAdbCommand(
  deviceId: string,
  command: string,
): Promise<string> {
  const fullCommand = ["adb", "-s", deviceId, ...command.split(" ")];
  logD(`Executing ADB command: ${fullCommand.join(" ")}`);
  // 验证命令数组是否有效
  if (fullCommand.length < 1 || !fullCommand[0]) {
    logE("Invalid ADB command: missing executable");
    return "adb命令执行错误,请检查参数!";
  }
  return new Promise((resolve, reject) => {
    // 使用类型断言确保第一个参数不为undefined
    const process = spawn(fullCommand[0]!, fullCommand.slice(1));
    let output = "";

    process.stdout.on("data", (data) => {
      output += data.toString();
    });

    process.stderr.on("data", (data) => {
      logE(`stderr: ${data}`);
    });

    process.on("close", (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });

    // 设置超时
    setTimeout(() => {
      process.kill(); // 强制终止进程
      reject(new Error("Command timeout"));
    }, 30000); // 30秒超时
  });
}

const execAsync = promisify(exec);

// export async function executeAdbCommand(
//   deviceId: string,
//   command: string,
// ): Promise<string> {
//   const fullCommand = `adb -s ${deviceId} ${command}`;
//   try {
//     const result = await execAsync(fullCommand);
//     logD(`ADB command executed: ${fullCommand}`);
//     return result.stdout;
//   } catch (error) {
//     logE(`ADB command failed: ${fullCommand}, Error: ${error}`);
//     // 打印堆栈
//     if (error instanceof Error) {
//       logE(error.message);
//     }
//     return "adb命令执行错误,请检查设备是否正常连接!";
//   }
// }

export async function turnOnDevice(deviceId: string): Promise<void> {
  await executeAdbCommand(deviceId, "shell input keyevent KEYCODE_WAKEUP");
}

export async function turnOffDevice(deviceId: string): Promise<void> {
  await executeAdbCommand(deviceId, "shell input keyevent KEYCODE_POWER");
}
