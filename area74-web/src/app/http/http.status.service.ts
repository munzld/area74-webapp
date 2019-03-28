import { Injectable } from '@angular/core';

import { Observable ,  BehaviorSubject } from 'rxjs';

/**
 * Keep track of how many HTTP threads we have,
 * report if HTTP is active via an Observable.
 */
@Injectable()
export class HttpStatusService {

    running: Observable<boolean>;
    private internalRunning: BehaviorSubject<boolean>;

    private count = 0;

    constructor() {
        this.internalRunning = new BehaviorSubject(false);
        this.running = this.internalRunning.asObservable();
    }

    /**
     * Increment the running count and notify subscribers
     */
    startRunning(): void {
        this.count++;
        this.internalRunning.next(true);
    }

    /**
     * Decrement the running count and notify subscribers if we are at 0
     */
    stopRunning(): void {
        this.count--;

        if (this.count <= 0) {
            this.internalRunning.next(false);
        }
    }
}
