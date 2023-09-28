import { ReactElement } from "react"
import { FiChevronDown } from "react-icons/fi"
import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { useUserQuery } from "@/gql/graphql"

type ProfileMenuButtonComponents = {
  avatarComponent: ReactElement
  nameComponent: ReactElement
  emailComponent: ReactElement
}

export default function ProfileMenu() {
  const { data } = useUserQuery({ variables: { userId: "1" } })
  const user = data?.user

  const {
    avatarComponent,
    nameComponent,
    emailComponent,
  }: ProfileMenuButtonComponents = user
    ? {
        avatarComponent: <Avatar size="sm" src={user.avatar || undefined} />,
        nameComponent: (
          <Text fontSize="sm">
            {user.firstName} {user.lastName}
          </Text>
        ),
        emailComponent: (
          <Text fontSize="xs" color="gray.600">
            {user.email}
          </Text>
        ),
      }
    : {
        avatarComponent: <SkeletonCircle />,
        nameComponent: <Skeleton fontSize="sm">Sample user</Skeleton>,
        emailComponent: <Skeleton fontSize="xs">sample@email.com</Skeleton>,
      }

  return (
    <Menu>
      <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
        <HStack>
          {avatarComponent}
          <VStack
            display={{ base: "none", md: "flex" }}
            alignItems="flex-start"
            spacing="1px"
            ml="2"
          >
            {nameComponent}
            {emailComponent}
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
  )
}
