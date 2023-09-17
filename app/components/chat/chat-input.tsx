import {
  Button,
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
    <Formik
      initialValues={initialValues}
      onSubmit={async ({ message }, actions) => {
        createMessage(MessageSender.User, message)
        await complete(message)
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
  )
}
