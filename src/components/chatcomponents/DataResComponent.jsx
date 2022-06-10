import { Box, Text, Spacer, Flex } from "@chakra-ui/react"

export function DataResComponent (props) {

    return (
        <>
            {props.values.name.length === 0 ? <></> : (
                <Flex>
                    <Spacer />
                    <Box shadow='lg' bg="pink.200" p="4" m="4" borderRadius="lg">
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Text align="end"> {props.values.name} {props.values.second_name} {props.values.last_name} {props.values.last_name_mom} </Text>
                        </Box>
                    </Box>
                </Flex>
                
            )}
        </>
    )
}