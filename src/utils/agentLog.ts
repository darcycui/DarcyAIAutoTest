import { AndroidAgent } from "@midscene/android";
import { logD } from "./log.ts";

export function logEvent(agent: AndroidAgent) {
  const logContent = agent._unstableLogContent();
  console.log(logContent);
}
