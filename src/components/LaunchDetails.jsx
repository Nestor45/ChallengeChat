import { useParams } from 'react-router-dom';
import  {useState, useEffect} from "react"
import { Image, Badge, Flex, Text, Box, Progress } from "@chakra-ui/react"
import * as API from "../services/launches"

export function LaunchDetails() {
    const [launch, setLaunch] = useState({})
    let { launchId } = useParams()

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
            .then(setLaunch)
            .catch(console.log("Algo salio mal en LaunchDetails"))
    }, [launchId])

    return (
        <>
            <Box shadow='lg' bg="gray.700" p="4" m="4" borderRadius="lg">
                {launch.length === 0 ? <Progress size='xs' isIndeterminate /> : (
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Flex justify="center" align="center">
                            <Image src={launch.links?.mission_patch_small}/>
                        </Flex>
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='0.5' colorScheme='teal'>
                                    {launch.mission_name}
                                </Badge>
                                <Box
                                    color='gray.200'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='small'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                    Launch Year: {launch.launch_year}  Rocket: {launch.rocket?.rocket_name}
                                </Box>
                            </Box>
                            <Text fontSize="2xl" color="white">
                                <strong> {launch.details} </strong>
                            </Text>
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    ) 
}