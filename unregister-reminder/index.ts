import { AzureFunction, Context } from "@azure/functions"
import container from "container";
import { EventRepository } from "infrastructure/event-repository";
import { SERVICES } from "services";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const service = container.get<EventRepository>(SERVICES.EventRepository);
    
    if (myTimer.isPastDue)
    {
        context.log('Timer function is running late!');
    }
    service.getData().then(result => context.log('Timer trigger function ran!', result))
};

export default timerTrigger;
