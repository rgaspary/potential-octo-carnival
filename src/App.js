import React from 'react'
import { ChakraProvider, Flex, VStack, Grid } from '@chakra-ui/react'
import { routes } from './routes'
import { Routes, Route } from 'react-router-dom'

import { LoginModal, Header, Footer } from './components'
import '@fontsource/open-sans'

import { customTheme } from './theme'

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex textAlign="center" fontSize="xl" flexDir="column">
        <Header />
        <Grid p={3} h="100%">
          <VStack spacing={8}>
            <LoginModal />
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </VStack>
        </Grid>
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default App
