import {
  Button,
  Container,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { UseCompletionHelpers } from 'ai/react'
import { Field, FieldProps, Form, Formik } from 'formik'
import {
  CreateMessageFunction,
  MessageSender,
} from '@/app/components/chat/types'

interface ChatInputFormValues {
  message: string
}

interface ChatInputProps {
  createMessage: CreateMessageFunction
  complete: UseCompletionHelpers['complete']
}

export default function ChatInput({ createMessage, complete }: ChatInputProps) {
  const initialValues: ChatInputFormValues = { message: '' }

  return (
    <Container py="1rem">
      <Formik
        initialValues={initialValues}
        onSubmit={async ({ message }, actions) => {
          createMessage(MessageSender.User, message)
          actions.resetForm()
          await complete(message)
        }}
      >
        <Form>
          <Field name="message">
            {({ field, form }: FieldProps<ChatInputFormValues['message']>) => (
              <FormControl>
                <InputGroup>
                  <Input
                    bg="white"
                    pr="4.5rem"
                    autoComplete="off"
                    placeholder="Send a message"
                    _dark={{ bg: 'gray.700' }}
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
    </Container>
  )
}
