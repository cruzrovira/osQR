import { Button, Stack, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import React from "react"
const Menu: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Stack
      boxShadow={"md"}
      direction={"row"}
      justifyContent="flex-end"
      mb={6}
      p={2}
    >
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Stack>
  )
}

export default Menu
