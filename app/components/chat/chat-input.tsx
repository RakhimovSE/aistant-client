import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { Field, FieldProps, Form, Formik } from 'formik'

interface ChatInputFormValues {
  message: string
}

export default function ChatInput() {
  const initialValues: ChatInputFormValues = { message: '' }

  return (
    <Formik initialValues={initialValues} onSubmit={console.log}>
      <Form>
        <Field name="message">
          {({ field, form }: FieldProps<ChatInputFormValues['message']>) => (
            <FormControl>
              <InputGroup>
                <Input pr="4.5rem" autoComplete="off" {...field} />
                <InputRightElement width="4.5rem">
                  <Button
                    name="send"
                    type="submit"
                    h="1.75rem"
                    size="sm"
                    isLoading={form.isSubmitting}
                  >
                    Send
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          )}
        </Field>
      </Form>
    </Formik>
  )
}
