import { Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Text } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'

export function NameComponent() {
    function validateName(value) {
        let error
        if (!value) {
            error = 'El nombre es requerido'
        }
        return error
    }
    function validateSecondName(value_second) {
        let error
        if (!value_second) error = 'El segundo nombre es requerido'
        return error
    }
    function validateLastName(value_last_name) {
        let error
        if (!value_last_name) error = 'El apellido paterno es requerio'
        return error
    }
    function validateLastNameMom(value_last_name_mom) {
        let error
        if (!value_last_name_mom) error = 'El apellido materno es requerio'
        return error
    }

    const [name, setName] = useState('')
    const [second_name, setSecondName] = useState('')
    const [last_name, setLastName] = useState('')
    const [last_name_mom, setLastNameMom] = useState('')
    return (
        <>
            <Box shadow='lg' bg="gray.300" p="4" m="4" borderRadius="lg">
                <Formik
                    initialValues={{ name: '', second_name:'', last_name:'', last_name_mom:''}}
                    
                    onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false)
                    }, 1000)}}
                >
                    {(props) => (
                        <Form>
                            <Field name='name' validate={validateName}>
                                {({ field, form }) => (
                                <FormControl>
                                    <FormLabel htmlFor='name'>¿Cuál es tu nombre?</FormLabel>
                                    <Input {...field} id='name' placeholder='Nombre' value={name} onChange={ev => setName(ev.target.value)} />
                                    {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
                                </FormControl>
                                )}
                            </Field>
                            <Field name='second_name' validate={validateSecondName}>
                                {({ field, form }) => (
                                <FormControl>
                                    <FormLabel htmlFor='second_name'></FormLabel>
                                    <Input {...field} id='second_name' placeholder='Segundo Nombre' value={second_name} onChange={ev => setSecondName(ev.target.value)}/>
                                    {/* <FormErrorMessage>{form.errors.second_name}</FormErrorMessage> */}
                                </FormControl>
                                )}
                            </Field>
                            <Field name='last_name' validate={validateLastName}>
                                {({ field, form }) => (
                                <FormControl>
                                    <FormLabel htmlFor='last_name'></FormLabel>
                                    <Input {...field} id='last_name' placeholder='Apellido Paterno' value={last_name} onChange={ev => setLastName(ev.target.value)}/>
                                    {/* <FormErrorMessage>{form.errors.last_name}</FormErrorMessage> */}
                                </FormControl>
                                )}
                            </Field>
                            <Field name='last_name_mom' validate={validateLastNameMom}>
                                {({ field, form }) => (
                                <FormControl>
                                    <FormLabel htmlFor='last_name_mom'></FormLabel>
                                    <Input {...field} id='last_name_mom' placeholder='Apellido Materno' value={last_name_mom} onChange={ev => setLastNameMom(ev.target.value)}/>
                                    {/* <FormErrorMessage>{form.errors.last_name_mom}</FormErrorMessage> */}
                                </FormControl>
                                )}
                            </Field>
                            <Button
                                mt={4}
                                colorScheme='teal'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Enviar
                            </Button>
                            <Text>{name} {second_name} {last_name} {last_name_mom}</Text>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    )
}