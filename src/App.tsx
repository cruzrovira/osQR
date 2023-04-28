import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { useFormik } from "formik"
import QRCode from "qrcode.react"
import React, { useState } from "react"
import * as yup from "yup"

import Menu from "./components/menu"

const App: React.FC = () => {
  const colorButton = useColorModeValue("blue", undefined)

  const [datos, setDatos] = useState({
    color: "#fff",
    url: "https://twitter.com/cruzrovira",
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { ...datos },
    validationSchema: yup.object({
      color: yup.string().required("El color es requerido"),
      url: yup.string().required("Url o texto es requerido"),
    }),
    onSubmit: value => {
      setDatos({ color: value.color, url: value.url })
    },
  })
  const dowloadImage = () => {
    let img = document.getElementById("qr") as HTMLCanvasElement
    let link = document.createElement("a")
    link.download = "qr.png"
    link.href = img.toDataURL()
    link.click()
  }

  return (
    <>
      <Menu />
      <Stack
        alignItems={"center"}
        direction={{ base: "column", md: "row" }}
        gap={4}
        justifyContent="center"
        m={"auto"}
        w={{ base: "300px", md: "600px" }}
      >
        <QRCode
          bgColor={datos.color}
          id="qr"
          renderAs="canvas"
          size={300}
          value={datos.url}
        />
        <VStack>
          <Heading mb={2}>Generar de código QR</Heading>
          <form onSubmit={formik.handleSubmit}>
            <FormControl
              isInvalid={formik.touched.color && !!formik.errors.color}
            >
              <FormLabel>Color</FormLabel>
              <Input
                type={"color"}
                w="20%"
                {...formik.getFieldProps("color")}
              />
              <FormErrorMessage>{formik.errors.color}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.url && !!formik.errors.url}>
              <FormLabel>Ingresa Url o texto </FormLabel>
              <Stack direction={"row"}>
                <Input placeholder="" {...formik.getFieldProps("url")} />
                <Button colorScheme={colorButton} type="submit">
                  Enviar
                </Button>
              </Stack>
              <FormErrorMessage>{formik.errors.url}</FormErrorMessage>
            </FormControl>

            <Button colorScheme={colorButton} mt={2} onClick={dowloadImage}>
              Descargar imagen
            </Button>
          </form>
        </VStack>
      </Stack>
    </>
  )
}

export default App
