import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormControl, FormLabel, FormErrorMessage, Input, Box } from "@chakra-ui/react"
export function NameCompo() {
    function validateData(value) {
        let error
        console.log(value)
        if (!value) error = 'Name is required'
        return error
    }
    function validateSecondName(value) {
        let error
        console.log(value)
        if (!value) error = 'Last name is required'
        return error
    }
    return (
        <>
            <Box shadow='lg' bg="gray.100" p="4" m="4" borderRadius="lg">
                <Formik 
                    initialValues={{ name: '' }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {(props) => (
                        <Form>
                            <Field name='name' validate={validateData}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='name'>Nombre</FormLabel>
                                        <Input {...field} id='name' placeholder='Name' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='last_name' validate={validateSecondName}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='last_name'>Apellido</FormLabel>
                                        <Input {...field} id='name' placeholder='Last Name' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                mt={4}
                                colorScheme='teal'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    )
}