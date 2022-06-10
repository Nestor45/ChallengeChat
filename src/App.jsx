import { Heading, Image, Box, Text } from "@chakra-ui/react"
import { Routes, Route, Link } from "react-router-dom"
import { LaunchList } from "./components/LaunchList"
import { LaunchDetails } from "./components/LaunchDetails"
import logo from "./assets/spaceX-Logo.png"
import logoname from "./assets/spacex-logo-name.png"
import { ChatComponent } from "./components/chatcomponents/ChatComponent";

function App() {

  return (
    <div>
      <Image m="4" src={logo} width={300} borderRadius='full'/>
      <Image m="6" src={logoname} alt="" width={300}/>
      <Box maxW='32rem' display='flex' alignItems='baseline' shadow='lg' >
        <Heading as="h1" size="lg" m="4" mb={4}>SpaceX Lauches</Heading>
        <Link to="/chat">
          <Text color="teal.500">
            Create a free contact CHAT
          </Text>
        </Link>
      </Box>
      <Routes>
        <Route path="/" element={<LaunchList/>}/>
        <Route path="launch/:launchId" element={<LaunchDetails/>}></Route>
        <Route path="/chat" element={<ChatComponent/>}/>
      </Routes>
    </div>
  )
}

export default App
