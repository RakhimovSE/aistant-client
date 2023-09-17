import { Box, Container, VStack } from '@chakra-ui/react'
import { Message, MessageSender } from './types'

interface ChatBodyProps {
  messages: Message[]
}

export default function ChatBody({ messages }: ChatBodyProps) {
  return (
    <Container as={VStack} flex="1" spacing="1rem">
      {messages.map((message, index) => (
        <Box
          key={index}
          w="full"
          borderRadius="1rem"
          p="1rem"
          bg={message.type === MessageSender.User ? 'orange.100' : 'teal.100'}
          _dark={{
            bg: message.type === MessageSender.User ? 'orange.900' : 'teal.900',
          }}
          textAlign={message.type === MessageSender.User ? 'right' : undefined}
        >
          {message.text}
        </Box>
      ))}
    </Container>
  )
}
