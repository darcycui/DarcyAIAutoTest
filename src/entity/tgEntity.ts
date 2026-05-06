import type { AndroidAgent, AndroidDevice } from "@midscene/android";

export class TelegramEntity {
  public id: number;
  public uuid: string;
  public userName: string;
  public userChatTo: string;
  public message: string;
  public agent: AndroidAgent;

  constructor(
    id: number,
    uuid: string,
    userName: string,
    userChatTo: string,
    message: string,
    agent: AndroidAgent,
  ) {
    this.id = id;
    this.uuid = uuid;
    this.userName = userName;
    this.userChatTo = userChatTo;
    this.message = message;
    this.agent = agent;
  }
}
