'use client'

import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { Chat, MobileNav, SidebarContent } from '@/app/components'

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'flex' }}
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
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        ml={{ base: 0, md: 60 }}
      >
        <Chat />
      </Box>
    </Box>
  )
}
