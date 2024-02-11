import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'I have no defined career path; how do I move forward?',
    message: `I have no defined career path; how do I move forward?`
  },
  {
    heading: 'Provide 5 essential investment tips for me specifically',
    message: 'Provide 5 essential investment tips for my specifically'
  },
  {
    heading: 'How can I improve my discipline despite my difficulties',
    message: `How can I improve my discipline despite my difficulties`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to a16i Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This a chatbot specifically trained as ato be your mentor and coach. 
          Check for more info {' '}
          <ExternalLink href="https://a16i.vercel.app/">Here</ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
