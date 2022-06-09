import { Formik, Form, Field} from 'formik'
import { Heading, FormControl, FormLabel, FormErrorMessage, Input, Box, Text } from "@chakra-ui/react"
import { useState } from 'react'

export function DateCompo () {
    const [date, setDate] = useState('')
    return (
        <>
            <Box shadow='lg' bg="gray.100" p="4" m="4" borderRadius="lg">
                <Formik
                    initialValues={ {day:'', month:'', year:''} }
                    validate = { values => {
                        const errors = {}
                        if (!values.day) {
                            errors.day = 'El día es requerido'
                        } if (!values.month) {
                            errors.month = 'El mes es requerido'
                        } if (!values.year) {
                            errors.year = 'El año es requerido'
                        } else {
                            let full_date = values.day +" "+ values.month +" "+ values.year
                            setDate(full_date) 
                        }
                        return errors
                    }}
                >
                    <Form>
                        <Heading as="h4" size="md" m="4" mb={4}>¿Cuál es tu fecha de nacimiento?</Heading>
                        <Field name="day">
                            {({ field, form }) => 
                                <FormControl isInvalid={form.errors.day && form.touched.day}>
                                    <FormLabel htmlFor='day'></FormLabel>
                                    <Input {...field} id='day' placeholder='Día' />
                                    <FormErrorMessage>{form.errors.day}</FormErrorMessage>
                                </FormControl>
                            }
                        </Field>
                        <Field name="month">
                            {({ field, form }) => 
                                <FormControl isInvalid={form.errors.month && form.touched.month}>
                                    <FormLabel htmlFor='month'></FormLabel>
                                    <Input {...field} id='month' placeholder='Mes' />
                                    <FormErrorMessage>{form.errors.month}</FormErrorMessage>
                                </FormControl>
                            }
                        </Field>
                        <Field name="year">
                            {({ field, form }) => 
                                <FormControl isInvalid={form.errors.year && form.touched.year}>
                                    <FormLabel htmlFor='year'></FormLabel>
                                    <Input {...field} id='year' placeholder='Año' />
                                    <FormErrorMessage>{form.errors.year}</FormErrorMessage>
                                </FormControl>
                            }
                        </Field>
                        <Text>{ date }</Text>
                    </Form>
                </Formik>
            </Box>
        </>
    )
}