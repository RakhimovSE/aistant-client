import { useCallback, useState } from 'react'
import { Text } from '@chakra-ui/react'
import { useCompletion } from 'ai/react'
import ChatBody from './chat-body'
import ChatInput from './chat-input'
import { CreateMessageFunction, Message, MessageSender } from './types'

export default function Chat() {
  const { completion, isLoading, complete } = useCompletion({
    onFinish: (_prompt, completion) =>
      createMessage(MessageSender.AI, completion),
  })

  const [messages, setMessages] = useState<Message[]>([])

  const createMessage = useCallback<CreateMessageFunction>(
    (sender, messageText) => {
      setMessages((messages) => [
        ...messages,
        { text: messageText, type: sender },
      ])
    },
    []
  )

  return (
    <>
      <ChatBody messages={messages} />
      {isLoading && <Text>{completion}</Text>}
      <ChatInput createMessage={createMessage} complete={complete} />
    </>
  )
}
