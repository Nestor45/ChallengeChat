import { Formik, Form, Field} from 'formik'
import { Heading, FormControl, FormLabel, FormErrorMessage, Input, Box, Text } from "@chakra-ui/react"
import { useState } from 'react'
import { DataResComponent } from "./DataResComponent";

export function DataCompo () {
    return (
        <>
            <Box shadow='lg' bg="gray.100" p="4" m="4" borderRadius="lg">
                <Formik
                    initialValues={ {email:'', phone:''} }
                    validate = { values => {
                        const errors = {}
                        if (!values.email) {
                            errors.email = 'El correo es requerido'
                        } if (!values.phone) {
                            errors.phone = 'El telefono es requerido'
                        }
                        return errors
                    }}
                >
                    {(props) => (
                        <Form>
                            <Heading as="h4" size="md" m="4" mb={4}>Datos del contacto</Heading>
                            <Field name="email">
                                {({ field, form }) => 
                                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                                        <FormLabel htmlFor='email'></FormLabel>
                                        <Input {...field} id='email' type="email" placeholder='Correo' />
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                }
                            </Field>
                            <Field name="phone">
                                {({ field, form }) => 
                                    <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                                        <FormLabel htmlFor='phone'></FormLabel>
                                        <Input {...field} id='phone' placeholder='5468731537' />
                                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                                    </FormControl>
                                }
                            </Field>
                            <DataResComponent {...props}/>
                            {
                                props.values.phone.length === 0 ? <></> : (
                                    <Box shadow='lg' bg="gray.100" p="4" m="4" borderRadius="lg">
                                        <Text>Si tus datos son correctos por favor continuemos</Text>
                                    </Box>
                                    
                                )
                            }
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    )
}