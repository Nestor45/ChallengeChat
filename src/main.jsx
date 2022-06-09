import React from 'react'
import ReactDOM from 'react-dom/client'
import  { BrowserRouter } from "react-router-dom"
import App from './App'
import {ChakraProvider, Container} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Container maxW='initial' centerContent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Container>
    </ChakraProvider>    
  </React.StrictMode>
)
