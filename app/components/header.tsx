import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi"
import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Skeleton,
  SkeletonCircle,
  Spacer,
  Text,
  UseDisclosureReturn,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { useGetUserQuery } from "@/gql/graphql"

interface NavbarProps extends FlexProps {
  onSidebarOpen: UseDisclosureReturn["onOpen"]
}

function Navbar({ onSidebarOpen, ...rest }: NavbarProps) {
  const { data } = useGetUserQuery({ variables: { userId: "3" } })
  const user = data?.user

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

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                {user ? (
                  <Avatar size="sm" src={user.avatar} />
                ) : (
                  <SkeletonCircle />
                )}
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  {user ? (
                    <>
                      <Text fontSize="sm">
                        {user.firstName} {user.lastName}
                      </Text>
                      <Text fontSize="xs" color="gray.600">
                        {user.email}
                      </Text>
                    </>
                  ) : (
                    <>
                      <Skeleton fontSize="sm">Sample user</Skeleton>
                      <Skeleton fontSize="xs">sample@email.com</Skeleton>
                    </>
                  )}
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default Navbar
