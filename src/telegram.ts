import {
    AndroidAgent,
    AndroidDevice,
    getConnectedDevices,
  } from '@midscene/android';
  import 'dotenv/config'; // read environment variables from .env file
  import { log } from './log.ts';
  
  const sleep = (ms: number | undefined) => new Promise((r) => setTimeout(r, ms));

  export const telegram = async () => {
    const devices = await getConnectedDevices();
    log(`connected devices:${devices}`)
    // 检查是否有连接的设备
    if (!devices || devices.length === 0) {
      throw new Error('No connected Android devices found');
    }
    // 创建设备对象 emulator-5554
    const device = new AndroidDevice(devices[0].udid, {
      autoDismissKeyboard: false,
    });

    // 创建 agent对象
    const agent = new AndroidAgent(device, {
      aiActContext:
        'If any location, permission, user agreement, etc. popup, click agree.',
      screenshotShrinkFactor: 2,

    });
    // 连接设备
    await device.connect();
    // 打开应用
    await agent.terminate('org.telegram.messenger.web');
    await sleep(1000);
    await agent.launch('org.telegram.messenger.web');
    await sleep(1000);
    // 点击按钮
    await agent.aiAct('click Start Messging button');
    log(agent._unstableLogContent());  
    await sleep(3000);
    // 断言
    await agent.aiAssert("There is a text 'Your phone number' on top");
    log(agent._unstableLogContent());  
  }
  
  // Promise.resolve(
  //   (telegram)()
  // );