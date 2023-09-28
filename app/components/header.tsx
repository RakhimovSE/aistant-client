import { FiBell, FiMenu } from "react-icons/fi"
import {
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Spacer,
  Text,
  UseDisclosureReturn,
  useColorModeValue,
} from "@chakra-ui/react"
import ProfileMenu from "./profile-menu"

interface NavbarProps extends FlexProps {
  onSidebarOpen: UseDisclosureReturn["onOpen"]
}

function Navbar({ onSidebarOpen, ...rest }: NavbarProps) {
  return (
    <Flex
      p="1rem"
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onSidebarOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        {process.env.title}
      </Text>

      <Spacer display={{ base: "none", md: "block" }} />

      <HStack spacing="1rem">
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <ProfileMenu />
      </HStack>
    </Flex>
  )
}

export default Navbar
