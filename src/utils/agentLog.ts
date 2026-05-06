import { AndroidAgent } from "@midscene/android";
import { logD } from "./log.ts";

export function logEvent(agent: AndroidAgent) {
  const logContent = agent._unstableLogContent();
  logD(JSON.stringify(logContent, null, 2));
}
