/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
export {Subject, AnonymousSubject} from './internal/Subject';
/* tslint:enable:no-unused-variable */
export {Observable} from './internal/Observable';

// statics
/* tslint:disable:no-use-before-declare */
import './add/observable/bindCallback';
import './add/observable/bindNodeCallback';
import './add/observable/combineLatest';
import './add/observable/concat';
import './add/observable/defer';
import './add/observable/empty';
import './add/observable/forkJoin';
import './add/observable/from';
import './add/observable/fromEvent';
import './add/observable/fromEventPattern';
import './add/observable/fromPromise';
import './add/observable/generate';
import './add/observable/if';
import './add/observable/interval';
import './add/observable/merge';
import './add/observable/race';
import './add/observable/never';
import './add/observable/of';
import './add/observable/onErrorResumeNext';
import './add/observable/pairs';
import './add/observable/range';
import './add/observable/using';
import './add/observable/throw';
import './add/observable/timer';
import './add/observable/zip';
// v4-backwards-compatibility
import './add/observable/backwards-compatibility-static';

//dom
import './add/observable/dom/ajax';
import './add/observable/dom/webSocket';

//internal/operators
import './add/operator/buffer';
import './add/operator/bufferCount';
import './add/operator/bufferTime';
import './add/operator/bufferToggle';
import './add/operator/bufferWhen';
import './add/operator/catch';
import './add/operator/combineAll';
import './add/operator/combineLatest';
import './add/operator/concat';
import './add/operator/concatAll';
import './add/operator/concatMap';
import './add/operator/concatMapTo';
import './add/operator/count';
import './add/operator/dematerialize';
import './add/operator/debounce';
import './add/operator/debounceTime';
import './add/operator/defaultIfEmpty';
import './add/operator/delay';
import './add/operator/delayWhen';
// v4-backwards-compatibility : no dependency on `Set`
// import './add/operator/distinct';
import './add/operator/distinctUntilChanged';
import './add/operator/distinctUntilKeyChanged';
import './add/operator/do';
import './add/operator/exhaust';
import './add/operator/exhaustMap';
import './add/operator/expand';
import './add/operator/elementAt';
import './add/operator/filter';
import './add/operator/finally';
import './add/operator/find';
import './add/operator/findIndex';
import './add/operator/first';
// v4-backwards-compatibility : no dependency on `Map`
// import './add/operator/groupBy';
import './add/operator/ignoreElements';
import './add/operator/isEmpty';
import './add/operator/audit';
import './add/operator/auditTime';
import './add/operator/last';
import './add/operator/let';
import './add/operator/every';
import './add/operator/map';
import './add/operator/mapTo';
import './add/operator/materialize';
import './add/operator/max';
import './add/operator/merge';
import './add/operator/mergeAll';
import './add/operator/mergeMap';
import './add/operator/mergeMapTo';
import './add/operator/mergeScan';
import './add/operator/min';
import './add/operator/multicast';
import './add/operator/observeOn';
import './add/operator/onErrorResumeNext';
import './add/operator/pairwise';
import './add/operator/partition';
import './add/operator/pluck';
import './add/operator/publish';
import './add/operator/publishBehavior';
import './add/operator/publishReplay';
import './add/operator/publishLast';
import './add/operator/race';
import './add/operator/reduce';
import './add/operator/repeat';
import './add/operator/repeatWhen';
import './add/operator/retry';
import './add/operator/retryWhen';
import './add/operator/sample';
import './add/operator/sampleTime';
import './add/operator/scan';
import './add/operator/sequenceEqual';
import './add/operator/share';
import './add/operator/shareReplay';
import './add/operator/single';
import './add/operator/skip';
import './add/operator/skipLast';
import './add/operator/skipUntil';
import './add/operator/skipWhile';
import './add/operator/startWith';
import './add/operator/subscribeOn';
import './add/operator/switch';
import './add/operator/switchMap';
import './add/operator/switchMapTo';
import './add/operator/take';
import './add/operator/takeLast';
import './add/operator/takeUntil';
import './add/operator/takeWhile';
import './add/operator/throttle';
import './add/operator/throttleTime';
import './add/operator/timeInterval';
import './add/operator/timeout';
import './add/operator/timeoutWith';
import './add/operator/timestamp';
import './add/operator/toArray';
import './add/operator/toPromise';
import './add/operator/window';
import './add/operator/windowCount';
import './add/operator/windowTime';
import './add/operator/windowToggle';
import './add/operator/windowWhen';
import './add/operator/withLatestFrom';
import './add/operator/zip';
import './add/operator/zipAll';
// v4-backwards-compatibility
import './add/operator/backwards-compatibility';

/* tslint:disable:no-unused-variable */
export {Operator} from './internal/Operator';
export {Observer, Observer as IObserver} from './internal/Observer';
export {Subscription} from './internal/Subscription';
export {Subscriber} from './internal/Subscriber';
export {AsyncSubject} from './internal/AsyncSubject';
export {ReplaySubject} from './internal/ReplaySubject';
export {BehaviorSubject} from './internal/BehaviorSubject';
export {ConnectableObservable} from './internal/observable/ConnectableObservable';
export {Notification} from './internal/Notification';
export {EmptyError} from './internal/util/EmptyError';
export {ArgumentOutOfRangeError} from './internal/util/ArgumentOutOfRangeError';
export {ObjectUnsubscribedError} from './internal/util/ObjectUnsubscribedError';
export {TimeoutError} from './internal/util/TimeoutError';
export {UnsubscriptionError} from './internal/util/UnsubscriptionError';
export {TimeInterval} from './internal/patching/operator/timeInterval';
export {Timestamp} from './internal/operators/timestamp';
export {TestScheduler} from './internal/testing/TestScheduler';
export {VirtualTimeScheduler} from './internal/scheduler/VirtualTimeScheduler';
export {AjaxRequest, AjaxResponse, AjaxError, AjaxTimeoutError} from './internal/observable/dom/AjaxObservable';
export { pipe } from './internal/util/pipe';
// v4-backwards-compatibility
export {
  CompositeDisposable, Disposable, RefCountDisposable, SerialDisposable, SingleAssignmentDisposable, IDisposable
} from './disposable/Disposable';
// v4-backwards-compatibility
export {ReactiveTest} from './internal/testing/ReactiveTest';

import { asap } from './internal/scheduler/asap';
import { async } from './internal/scheduler/async';
import { queue } from './internal/scheduler/queue';

// v4-backwards-compatibility
import { IScheduler } from './internal/Scheduler';
export { IScheduler };
import { immediate } from './internal/scheduler/immediate';

import { animationFrame } from './internal/scheduler/animationFrame';
import { AsapScheduler } from './internal/scheduler/AsapScheduler';
import { AsyncScheduler } from './internal/scheduler/AsyncScheduler';
import { QueueScheduler } from './internal/scheduler/QueueScheduler';
import { AnimationFrameScheduler } from './internal/scheduler/AnimationFrameScheduler';
import { rxSubscriber } from './internal/symbol/rxSubscriber';
import { iterator } from './internal/symbol/iterator';
import { observable } from './internal/symbol/observable';

import * as _operators from './internal/operators';

export const operators = _operators;

/* tslint:enable:no-unused-variable */

/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
let Scheduler = {
  asap,
  queue,
  animationFrame,
  async,
  // v4-backwards-compatibility
  currentThread: queue,
  immediate: immediate as IScheduler,
  default: async
};

/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
let Symbol = {
  rxSubscriber,
  observable,
  iterator
};

export {
    Scheduler,
    Symbol
};
