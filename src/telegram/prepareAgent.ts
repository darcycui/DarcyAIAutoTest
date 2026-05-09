import { AndroidAgent, AndroidDevice } from "@midscene/android";
import { app_name_mapping } from "./config.ts";

export async function initAgent(uuid: string): Promise<AndroidAgent> {
  // 新建设备类，开启scrcpy功能
  const device = new AndroidDevice(uuid, {
    scrcpyConfig: { enabled: true },
  });
  // 设置app名称映射，可以在AI Action中使用app的别名，替代包名
  device.setAppNameMapping(app_name_mapping());
  // 新建Agent，传入设备和一些配置项
  const agent = new AndroidAgent(device, {
    appNameMapping: app_name_mapping(),
    // screenshotShrinkFactor: 2, // 截图缩放 宽高都缩放到1/2，默认为1，即不缩放
    aiActContext: "出现任何权限弹窗，点击始终允许按钮或允许按钮；",
  });
  // 等待设备连接成功
  await device.connect();
  // 返回Agent实例
  return agent;
}
