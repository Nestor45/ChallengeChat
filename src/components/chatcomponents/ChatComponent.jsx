import { Button, Box} from "@chakra-ui/react"
import { NameCompo } from "./NameCompo";
import { DataResComponent } from "./DataResComponent";
import { DataCompo } from "./DataCompo";
import { DateCompo } from "./DateCompo";
export function ChatComponent () {
    return (
        <>
            <Box shadow='lg' bg="gray.700" p="4" m="4" borderRadius="lg">
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <NameCompo />
                </Box>
                <DataResComponent/>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <DateCompo/>
                </Box>
                <DataResComponent/>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <DataCompo/>
                </Box>
                <DataResComponent/>
                <Button
                    
                    size="lg"
                    mt={8}
                    colorScheme='teal'
                    type='submit'
                >
                    Enviar
                </Button>
                <DataResComponent/>
            </Box>
        </>
    )
}