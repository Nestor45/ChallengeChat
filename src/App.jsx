import { Heading, Image, Box, Text } from "@chakra-ui/react"
import { Routes, Route, Link } from "react-router-dom"
import { Launches } from "./components/Launches"
import logo from "./assets/spaceX-Logo.png"
import { ChatComponent } from "./components/chatcomponents/ChatComponent";

function App() {

  return (
    <div>
      <Link to="/">
        <Box display='flex' alignItems='baseline'>
          <Image m="4" src={logo} alt="" width={300} align="center"/>
          <Heading as="h1" size="lg" m="4">SpaceX Lauches</Heading>
        </Box>
      </Link>
      <Routes>
        <Route path="/" element={<Launches/>}/>
      </Routes>
      <Routes>
        <Route path="/chat" element={<ChatComponent/>}/>
      </Routes>
    </div>
  )
}

export default App
