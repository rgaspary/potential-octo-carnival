import React from 'react'
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react'
import { routes } from './routes'
import { Routes, Route } from 'react-router-dom'

import { LoginModal, Header } from './components'

function App() {
  return (
    <ChakraProvider theme={theme}>
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
