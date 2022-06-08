import  {useState, useEffect} from "react"
import { Grid, GridItem, Progress} from "@chakra-ui/react"

import * as API from "../services/launches"
import { LaunchItem } from "./LaunchItem"

export function LaunchList() {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.error("Algo fallo"))
    }, [])

    return (
        <>
            { launches.length === 0 ? <Progress size='xs' isIndeterminate /> : (
                <Grid h='200px'
                    templateRows='repeat(5, 1fr)'
                    templateColumns='repeat(4, 1fr)'
                    gap={2}
                >
                    {launches.map(launch => (
                        <GridItem colSpan={2}>
                            <LaunchItem key={launch.flight_number} {... launch}/>
                        </GridItem>
                    )
                    )}
                </Grid >
            )}
        </>
    )
}
export default LaunchList