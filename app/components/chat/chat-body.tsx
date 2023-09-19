import { Container, ContainerProps, VStack } from "@chakra-ui/react"
import ChatMessage from "./chat-message"
import { Message } from "./types"

interface ChatBodyProps extends ContainerProps {
  messages: Message[]
}

export default function ChatBody({ messages, ...rest }: ChatBodyProps) {
  return (
    <Container as={VStack} spacing="1rem" {...rest}>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </Container>
  )
}
