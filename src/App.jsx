import  {useState, useEffect} from "react"
import { Grid,GridItem , Heading, Image, Box } from "@chakra-ui/react"

import { LaunchItem } from "./components/LaunchItem"
import * as API from "./services/launches"
import logo from "./assets/spaceX-Logo.png"

function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <div>
      <Box display='flex' alignItems='baseline'>
        <Image m="4" src={logo} alt="" width={300} align="center"/>
        <Heading as="h1" size="lg" m="4">SpaceX Lauches</Heading>
      </Box>
        
        <Grid h='200px'
          templateRows='repeat(5, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={2}
        >
          {launches.map(launch => (
            <GridItem colSpan={2}>
              <LaunchItem key={launch.flight_number} {... launch}/>
            </GridItem>
          ))}
        </Grid >
    </div>
  )
}

export default App
