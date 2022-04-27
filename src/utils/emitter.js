import EventEmitter from "events";

const _emitter = new EventEmitter();
_emitter.setMaxListeners(0); // unlimited listener
export const emitter = _emitter;
