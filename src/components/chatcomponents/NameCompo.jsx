import { Formik, Form, Field} from 'formik'
import { Heading, FormControl, FormLabel, FormErrorMessage, Input, Box, Text } from "@chakra-ui/react"
import { useState } from 'react'
export function NameCompo() {
    const [name, setName] = useState('')
    return (
        <>
            <Box shadow='lg' bg="gray.100" p="4" m="4" borderRadius="lg">
                <Formik 
                    initialValues={ {name:'', second_name:'', last_name:'', last_name_mom:''} }
                    
                    validate = { values => {
                        const errors = {}
                        if (!values.name) {
                            errors.name = 'El nombre es requerido'
                        } if (!values.last_name) {
                            errors.last_name = 'El apellido paterno es requerido'
                        } if (!values.last_name_mom) {
                            errors.last_name_mom = 'El apellido materno es requerido'
                        } else {
                            let name_complet = values.name +" "+ values.second_name+ " "+ values.last_name + " " +values.last_name_mom
                            setName(name_complet)
                        }
                        return errors
                    }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {(props) => (
                        <Form>
                            <Heading as="h4" size="md" m="4" mb={4}>¿Cuál es tu nombre?</Heading>

                            <Field name='name'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='name'></FormLabel>
                                        <Input {...field} id='name' placeholder='Nombre'/>
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='second_name'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.second_name && form.touched.second_name}>
                                        <FormLabel htmlFor='last_name'></FormLabel>
                                        <Input {...field} id='second_name' placeholder='Segundo Nombre' />
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='last_name'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.last_name && form.touched.last_name}>
                                        <FormLabel htmlFor='last_name'></FormLabel>
                                        <Input {...field} id='last_name' placeholder='Apellido Paterno' />
                                        <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='last_name_mom'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.last_name_mom && form.touched.last_name_mom}>
                                        <FormLabel htmlFor='last_name_mom'></FormLabel>
                                        <Input {...field} id='last_name_mom' placeholder='Apellido Materno' />
                                        <FormErrorMessage>{form.errors.last_name_mom}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Text>{ name }</Text>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    )
}