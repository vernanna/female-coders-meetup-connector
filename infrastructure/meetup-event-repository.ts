import { injectable } from 'inversify'
import { EventRepository } from 'infrastructure/event-repository'

@injectable()
export default class MeetupEventRepository implements EventRepository {
  async getData(): Promise<string> {
    return 'Hello from the service!'
  }
}
