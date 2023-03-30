/**
 * Created by video on 4/5/2016.
 */
import {Injectable} from '@angular/core';

export class VtEvent  {
    name: string;
    data: any;
    constructor(name: string, data: any) {
        this.name = name;
        this.data = data;
    }
}

export class VtEventListener {
    type: string;
    handler:  (...args: any) => any;  // cal back
    id: number;
    constructor (type: string, handler: () => void, id: number) {

        this.type = type;
        this.handler = handler;
        this.id = id;
    }
}
@Injectable()
export class VtEventsService {
    static instance: VtEventsService;
    static isCreating  = false;

    private subscribers: VtEventListener[] = [];
    private  idCounter: number;

    constructor() {
        if (!VtEventsService.isCreating) {
            throw new Error('You cant call new in Singleton instances!');
        } else {
            this.idCounter = 0;
        }
    }
    static getInstance() {
        if (VtEventsService.instance == null) {
            VtEventsService.isCreating = true;
            VtEventsService.instance = new VtEventsService();
            VtEventsService.isCreating = false;
        }
        return VtEventsService.instance;
    }
    addEventListener (type: string, handler: (...args: any) => any): number {
        const identifier: number = this.idCounter + 1;
        const eventListener: VtEventListener =  new VtEventListener(type, handler, identifier);
        this.subscribers.push(eventListener);
        this.idCounter = identifier + 1 ;
        return identifier;
    }

    dispatchEvent(event: VtEvent) {
        // find subscribers
        for (const item of this.subscribers) {
            if (item.type === event.name) {
                this.postToListener(item, event.data);
            }
        }
    }
    postToListener(listener: VtEventListener, event: VtEvent ) {
        listener.handler(event);
    }
}
