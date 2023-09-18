import { Box, Container, ContainerProps, VStack } from '@chakra-ui/react'
import { Message, MessageSender } from './types'

interface ChatBodyProps extends ContainerProps {
  messages: Message[]
}

export default function ChatBody({ messages, ...rest }: ChatBodyProps) {
  return (
    <Container as={VStack} py="1rem" spacing="1rem" {...rest}>
      {messages.map((message, index) => (
        <Box
          key={index}
          // w="full"
          borderRadius="1rem"
          p="1rem"
          alignSelf={
            message.type === MessageSender.User ? 'flex-end' : 'flex-start'
          }
          bg={message.type === MessageSender.User ? 'orange.100' : 'teal.100'}
          _dark={{
            bg: message.type === MessageSender.User ? 'orange.900' : 'teal.900',
          }}
        >
          {message.text}
        </Box>
      ))}
    </Container>
  )
}
