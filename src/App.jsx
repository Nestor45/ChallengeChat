import { Heading, Image, Box, Text } from "@chakra-ui/react"
import { Routes, Route, Link } from "react-router-dom"
import { Launches } from "./components/Launches"
import { NameComponent } from "./components/chatcomponents/NameComponent"
import logo from "./assets/spaceX-Logo.png"

function App() {

  return (
    <div>
      <Link to="/">
        <Box display='flex' alignItems='baseline'>
          <Image m="4" src={logo} alt="" width={300} align="center"/>
          <Heading as="h1" size="lg" m="4">SpaceX Lauches</Heading>
        </Box>
      </Link>
      <Link to="/chat">
        <Text color="teal.300">Go Chat</Text>
      </Link>
      <Routes>
        <Route path="/" element={<Launches/>}/>
      </Routes>
      <Routes>
        <Route path="/chat" element={<NameComponent/>}/>
      </Routes>
    </div>
  )
}

export default App
