import React from 'react'
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  extendTheme,
} from '@chakra-ui/react'
import { routes } from './routes'
import { Routes, Route } from 'react-router-dom'

import { LoginModal, Header } from './components'
import '@fontsource/open-sans'

import { customTheme } from './theme'

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Grid p={3}>
          <VStack spacing={8}>
            <LoginModal />
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App
