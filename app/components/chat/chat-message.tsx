import { useMemo } from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import { Message, MessageSender } from "./types"

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const messageProps = useMemo<BoxProps>(() => {
    switch (message.type) {
      case MessageSender.System:
        return {
          alignSelf: "center",
          bg: "gray.200",
          _dark: { bg: "gray.800" },
        }
      case MessageSender.AI:
        return {
          alignSelf: "flex-start",
          mr: "1rem",
          bg: "teal.100",
          _dark: { bg: "teal.900" },
        }
      case MessageSender.User:
        return {
          alignSelf: "flex-end",
          ml: "1rem",
          bg: "orange.100",
          _dark: { bg: "orange.900" },
        }
      default:
        throw new Error(`"Unexpected message type: ${message.type}`)
    }
  }, [message])

  return (
    <Box borderRadius="1rem" p="1rem" {...messageProps}>
      {message.text}
    </Box>
  )
}
