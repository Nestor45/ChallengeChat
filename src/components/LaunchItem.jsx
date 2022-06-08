import { Flex, Text, Spacer, Tag, Button, Icon, Box } from "@chakra-ui/react"
import { HiCalendar } from "react-icons/hi"
import { Link } from "react-router-dom"

export function LaunchItem (launch) {
    return (
        <Box shadow='lg' bg="gray.300" p="4" m="4" borderRadius="lg">
            <Flex display="flex">
                <Text fontSize="2xl">
                    Mission <strong> {launch.mission_name} </strong> ({launch.launch_year})
                </Text>
                <Spacer/>
                <Tag p="2" colorScheme={launch.launch_success ?  "green" : "red"}>{launch.launch_success ?  "Success" : "Failure"}</Tag>
            </Flex>
            <Flex align="center">
                <Icon as={HiCalendar} w="6" h="8" color="gray.600"></Icon>
                <Text fontSize={"sm"} ml="4" color="gray.600"> 
                {launch.launch_date_local}
                </Text>
            </Flex>
            <Link to={`/launch/${launch.flight_number}`}><Button mt={2} colorScheme="purple">More Details</Button></Link>
        </Box>
    )
}