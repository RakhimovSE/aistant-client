"use client"

import React from "react"
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { Chat, Header, SideNav } from "./components"

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Stack direction="column" h="100vh" spacing={0}>
      <Header onSidebarOpen={onOpen} />
      <Stack direction="row" flex={1} spacing={0}>
        <SideNav
          hidden={useBreakpointValue({ base: true, md: false }, { ssr: false })}
          borderRight="1px"
          borderRightColor={useColorModeValue("gray.200", "gray.700")}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <SideNav />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Stack
          bg={useColorModeValue("gray.100", "gray.900")}
          direction="column"
          flex={1}
          spacing={0}
        >
          <Chat />
        </Stack>
      </Stack>
    </Stack>
  )
}
