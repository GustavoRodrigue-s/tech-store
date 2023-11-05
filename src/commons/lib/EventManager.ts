type Listener<T> = (payload: T) => void;
type Event = string;

export class EventManager<T> {
  protected listeners = new Map<string, Listener<T>[]>();

  constructor() {
    this.listeners = new Map();
  }

  emit(event: Event, payload: T) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event)?.forEach(listener => listener(payload));
  }

  on(event: Event, listener: Listener<T>) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event)?.push(listener);
  }

  off(event: Event, listenerToRemove: Listener<T>) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      listener => listener !== listenerToRemove
    );

    this.listeners.set(event, filteredListeners);
  }
}
