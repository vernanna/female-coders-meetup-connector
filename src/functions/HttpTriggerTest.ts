import 'reflect-metadata';
import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import container from "src/container";
import { EventRepository } from "src/infrastructure/event-repository";
import { SERVICES } from "src/services";
import 'reflect-metadata';

export async function HttpTriggerTest(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const result = container.get<EventRepository>(SERVICES.EventRepository).getData();
    context.log(`Http function processed request for url "${request.url}"`);

    return { body: result };
};

app.http('HttpTriggerTest', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: HttpTriggerTest
});
