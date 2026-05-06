import type { TelegramEntity } from "./entity/tgEntity";
import { logD } from "./utils/log.ts";
import { sleep } from "./utils/sleep.ts";

export async function sendMessage(tg: TelegramEntity) {
  logD("start send_message");
  const agent = tg.agent;
  await agent.terminate("Telegram");
  await sleep(1000);
  await agent.launch("Telegram");
  await sleep(3000);
  logD(`进入聊天页面 ${tg.userChatTo}`);
  await agent.aiTap(`${tg.userChatTo}`);
  // log(agent)
  await sleep(3000);
  // logD("点击右上角三个点按钮");
  // await agent.aiTap(`右上角三个点按钮`);
  // await sleep(3000);
  // logD("点击Clear History菜单项");
  // await agent.aiTap(`"Clear History"`);
  // await sleep(3000);
  // logD("点击Delete按钮");
  // await agent.aiTap(`"Delete"`);
  // await sleep(3000);
  // logD(`输入文本："${tg.message}"，点击发送按钮`);
  // await agent.aiAct(`在底部输入框输入"${tg.message}"`);
  // await agent.aiTap(`发送按钮`);
  // await sleep(3000);
  logD("end send_message");
}
