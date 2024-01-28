import { injectable } from 'inversify'
import { EventRepository } from 'src/infrastructure/event-repository'

@injectable()
export default class MeetupEventRepository implements EventRepository {
  getData(): string {
    return 'Hello from the service!'
  }
}
