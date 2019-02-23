const events = [];

/** Event dispatcher is a simple realisation of pub/sub pattern. */
export class EventDispatcher {
    /**
     * Add event listener.
     * @param name
     * @param fn
     */
    addEventListener(name, fn) {
        if (!events[name]) {
            events[name] = []
        }

        events[name].push(fn);
    }

    /**
     * Dispatch event.
     * @param name
     */
    dispatchEvent(name) {
        if (!events[name]) {
            console.warn(`No events ${name}`);
            return;
        }

        events[name].forEach((fn) => fn());
    }
}