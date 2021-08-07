import { InjectionKey } from 'vue';
import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  createLogger,
  useStore as baseUseStore,
} from 'vuex';

import { initialState } from './initialState';

import * as moduleModal from './modules/modal';
// import * as moduleAuth from './modules/auth';

export type State = typeof initialState;

const plugins = [];
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger());
}

export const store = createStore({
  state: { ...initialState  },
  mutations: { ...moduleModal.mutations },
  getters: { ...moduleModal.getters },
  actions: { ...moduleModal.actions },
  plugins,
});

export const key: InjectionKey<VuexStore<State>> = Symbol();

export function useAppStore() {
  return baseUseStore(key);
}

type MutationPayload = moduleModal.MutationPayload;

type ActionsPayload = moduleModal.ActionsPayload;

type Getters = moduleModal.Getters;

/*
  ---------------------- no change code ----------------------
*/

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions
  ): void;
} & {
  dispatch<K extends keyof ActionsPayload>(
    key: K,
    payload: ActionsPayload[K][0],
    options?: DispatchOptions
  ): ActionsPayload[K][1];
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export function useStore(): Store {
  return store as Store;
}
