import { Routes, Route, Link} from "react-router-dom";
import { Heading, Image, Box, Text } from "@chakra-ui/react"
import {LaunchList} from "./components/LaunchList"
import logo from "./assets/spaceX-Logo.png"
import logoname from "./assets/spacex-logo-name.png"
import { LaunchDetails } from "./components/LaunchDetails";
import { NameCompo } from "./components/chatcomponents/NameCompo";

function App() {

  return (
    <div>
      <Link to="/">
        <Image m="4" src={logo} width={300} borderRadius='full'/>
        <Image m="6" src={logoname} alt="" width={300}/>
      </Link>
      <Box maxW='32rem' display='flex' alignItems='baseline' shadow='lg' >
        <Heading as="h1" size="lg" m="4" mb={4}>SpaceX Lauches</Heading>
        <Link to="/chat">
          <Text color="teal.500">
            Create a free contact CHAT
          </Text>
        </Link>
      </Box>

      <Routes>
        <Route path="/" element={<LaunchList/>}></Route>
        <Route path="launch/:launchId" element={<LaunchDetails/>}></Route>
        <Route path="/chat" element={<NameCompo/>}></Route>
      </Routes>
    </div>
  )
}

export default App
