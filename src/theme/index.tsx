import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  styles: {
    global: props => ({
      "html, body": { background: mode("gray.100", undefined)(props) },
    }),
  },
})

export { theme }
