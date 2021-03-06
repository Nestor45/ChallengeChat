import { Button, Box} from "@chakra-ui/react"
import { NameCompo } from "./NameCompo";
import { DataCompo } from "./DataCompo";
import { DateCompo } from "./DateCompo";
import { useState } from 'react'
export function ChatComponent () {
    const [data, setData] = useState()
    return (
        <>

            <Box shadow='lg' bg="gray.700" p="4" m="4" borderRadius="lg">
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <NameCompo/> 
                </Box>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <DateCompo/>
                </Box>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <DataCompo/>
                </Box>

                <Button
                    size="lg"
                    mt={8}
                    colorScheme='teal'
                    type='submit'
                >
                    Enviar
                </Button>
            </Box>
        </>
    )
}