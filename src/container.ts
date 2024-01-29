import { Container } from 'inversify';
import { EventRepository } from 'src/infrastructure/event-repository';
import MeetupEventRepository from 'src/infrastructure/meetup-event-repository';
import { SERVICES } from 'src/services';

const container = new Container();
container.bind<EventRepository>(SERVICES.EventRepository).to(MeetupEventRepository);

export default container;