import { useCallback, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useCompletion } from 'ai/react'
import ChatBody from './chat-body'
import ChatInput from './chat-input'
import { CreateMessageFunction, Message, MessageSender } from './types'

export default function Chat() {
  const { completion, isLoading, complete } = useCompletion({
    onFinish: (_prompt, completion) =>
      createMessage(MessageSender.AI, completion),
  })

  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Write anything you want and hit "Send"',
      type: MessageSender.System,
    },
  ])

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
      <Box overflow="scroll" flex={1} py="1rem">
        <ChatBody messages={messages} h={0} />
      </Box>
      <Box>
        {isLoading && <Text>{completion}</Text>}
        <ChatInput createMessage={createMessage} complete={complete} />
      </Box>
    </>
  )
}
