import { Box, Text} from "@chakra-ui/react"

export function DataResComponent () {
    return (
        <>
            <Box shadow='lg' bg="pink.200" p="4" m="4" borderRadius="lg">
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Text align="end">Hola si hay datos aqui van </Text>
                </Box>
            </Box>
        </>
    )
}