import type { TelegramEntity } from "./entity/tgEntity.ts";

export async function assertMessage(tg: TelegramEntity) {
  console.log("start assertMessage");
  const agent = tg.agent;
  const items = await agent.aiQuery("{message:string}[], 返回消息列表");
  // const items = [
  //   "hello, this is a test message from out",
  //   "hello, this is a test message from in",
  // ];
  console.log(`消息列表：${items}`);
  const targetItem = items.find((item: string) => item === tg.message);
  console.log(`期望消息：${tg.message}`);
  console.log(`目标消息：${targetItem}`);
  if (targetItem && targetItem === tg.message) {
    console.log(`消息匹配成功！`);
  } else {
    console.log(`消息匹配失败`);
  }
  console.log("end assertMessage");
}

export async function assertMessageAI(tg: TelegramEntity) {
  console.log("start assertMessageAI");
  const agent = tg.agent;
  let result = undefined;
  try {
    let result = await agent.aiAssert(`消息列表中包含"${tg.message}"`);
    // result = await agent.aiAssert(`消息列表中包含"世界杯"`);
    console.log(`消息匹配成功！`);
  } catch (e) {
    console.log(`消息匹配失败：${e}`);
  }
  // 获取日志内容
  const logContent = agent._unstableLogContent();
  console.log(logContent);
  console.log("end assert_message_ai");
}
