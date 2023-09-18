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
      <Box overflow="scroll" h={0} flex={1}>
        <ChatBody messages={messages} />
      </Box>
      <Box>
        {isLoading && <Text>{completion}</Text>}
        <ChatInput createMessage={createMessage} complete={complete} />
      </Box>
    </>
  )
}
