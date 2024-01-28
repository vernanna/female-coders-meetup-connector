import { Container } from 'inversify';
import { EventRepository } from 'infrastructure/event-repository';
import MeetupEventRepository from 'infrastructure/meetup-event-repository';
import { SERVICES } from 'services';
import 'reflect-metadata';

const container = new Container();
container.bind<EventRepository>(SERVICES.EventRepository).to(MeetupEventRepository);

export default container;