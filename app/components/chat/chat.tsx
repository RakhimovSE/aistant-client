import { useCallback, useState } from 'react'
import { Text } from '@chakra-ui/react'
import { useCompletion } from 'ai/react'
import { CreateMessageFunction, Message, MessageSender } from './types'
import ChatBody from './chat-body'
import ChatInput from './chat-input'

export default function Chat() {
  const { completion, complete } = useCompletion({
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
      <ChatBody />
      <Text>{completion}</Text>
      <ChatInput createMessage={createMessage} complete={complete} />
    </>
  )
}
