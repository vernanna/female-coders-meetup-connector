import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions'
import container from 'src/container'
import { EventRepository } from 'src/infrastructure/event-repository'
import { SERVICES } from 'src/services'

export async function TestTrigger(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const eventRepository = container.get<EventRepository>(SERVICES.EventRepository)
  const result = eventRepository.getData()
  context.log(`Http function processed request for url "${request.url}"`)

  return { body: result }
}

app.http('TestTrigger', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: TestTrigger,
})
