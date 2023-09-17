import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { useCompletion } from 'ai/react'
import { Field, FieldProps, Form, Formik } from 'formik'

interface ChatInputFormValues {
  message: string
}

export default function ChatInput() {
  const { completion, complete } = useCompletion()

  const initialValues: ChatInputFormValues = { message: '' }

  return (
    <>
      <div className="whitespace-pre-wrap my-6">{completion}</div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          await complete(values.message)
          actions.setSubmitting(false)
        }}
      >
        <Form>
          <Field name="message">
            {({ field, form }: FieldProps<ChatInputFormValues['message']>) => (
              <FormControl>
                <InputGroup>
                  <Input
                    pr="4.5rem"
                    autoComplete="off"
                    placeholder="Send a message"
                    {...field}
                  />
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
    </>
  )
}
