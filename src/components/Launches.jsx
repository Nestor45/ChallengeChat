import  {useState, useEffect} from "react"
import { Grid,GridItem , Heading, Image, Box, Text } from "@chakra-ui/react"
import { LaunchItem } from "./LaunchItem"
import * as API from "../services/launches"

export function Launches() {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        API.getAllLaunches().then(setLaunches)
    }, [])

    return (
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
    )
}