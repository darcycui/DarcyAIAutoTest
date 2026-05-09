import "dotenv/config"; // read environment variables from .env file
import { turnOnDevice, turnOffDevice } from "./utils/adb.ts";
import {
  deviceUUIDIn,
  chatToUserIn,
  messageIn,
  deviceUUIDOut,
  chatToUserOut,
  messageOut,
} from "./telegram/config.ts";
import { TelegramEntity } from "./entity/tgEntity.ts";
import { initAgent } from "./telegram/prepareAgent.ts";
import { logEvent } from "./utils/agentLog.ts";
import { sleep } from "./utils/sleep.ts";
import { sendMessage } from "./telegram/sendText.ts";
import { assertMessage, assertMessageAI } from "./telegram/assert.ts";

Promise.resolve(
  (async () => {
    turnOnDevice(deviceUUIDIn);
    let agentIn = await initAgent(deviceUUIDIn);
    try {
      let tgEntityIn = new TelegramEntity(
        1,
        deviceUUIDIn,
        "in",
        chatToUserIn,
        messageIn,
        agentIn,
      );
      await sendMessage(tgEntityIn);
    //   await assertMessage(tgEntityIn);
    //   await assertMessageAI(tgEntityIn);
    } catch (error) {
      console.log(`in端异常:${error}`);
    } finally {
      logEvent(agentIn);
      sleep(1000);
      turnOffDevice(deviceUUIDIn);
    }

    // turnOnDevice(deviceUUIDOut);
    // let agentOut = await initAgent(deviceUUIDOut);
    // try {
    //   let tgEntityOut = new TelegramEntity(
    //     2,
    //     deviceUUIDOut,
    //     "out",
    //     chatToUserOut,
    //     messageOut,
    //     agentOut,
    //   );
    //   await sendMessage(tgEntityOut);
    // } catch (error) {
    //   console.log(`out端异常:${error}`);
    //   logEvent(agentOut);
    // } finally {
    //   logEvent(agentOut);
    //   turnOffDevice(deviceUUIDOut);
    // }
  })(),
);
