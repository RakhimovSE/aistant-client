import { IconType } from 'react-icons'
import { FaMoon, FaSun } from 'react-icons/fa'
import {
  FiCompass,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi'
import {
  Box,
  BoxProps,
  Center,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import NavItem from './nav-item'

interface LinkItemProps {
  name: string
  icon: IconType
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
]

const SidebarContent = (props: BoxProps) => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Box {...props}>
      <Box flex={1}>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
      <Center as="footer" py={{ base: '12', md: '16' }}>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${useColorModeValue('dark', 'light')} mode`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
        />
      </Center>
    </Box>
  )
}

export default SidebarContent
