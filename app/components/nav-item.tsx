import { IconType } from "react-icons"
import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react"

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

function NavItem({ icon, children, ...rest }: NavItemProps) {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

export default NavItem
