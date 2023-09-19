export enum MessageSender {
  User = "user",
  AI = "ai",
  System = "system",
}

export type CreateMessageFunction = (
  sender: MessageSender,
  messageText: string,
) => void

export type Message = {
  text: string
  type: MessageSender
}
