import { GetterTree, MutationTree, ActionContext, CommitOptions } from 'vuex';

import { initialState } from '../initialState';

interface IModalState {
  isOpen: boolean,
  component: string,
}

/*
   ---------------------- Mutations -------------------------------
 */

export type MutationPayload = {
  SET_MODAL_STATE: IModalState;
};

export const mutations: MutationTree<State> & Mutations = {
  SET_MODAL_STATE({ modal }, payload: IModalState) {
    console.log('setModalState', payload);
    modal.isOpen = payload.isOpen;
  },
};

/*
   ---------------------- Getters -------------------------------
 */

export type Getters = {
  getModalComponent(state: State): string;
  getModalOpen(state: State): boolean;
};

export const getters: GetterTree<State, State> & Getters = {
  getModalComponent: ({ modal }) => {
    return modal.component;
  },
  getModalOpen: ({ modal }) => {
    return modal.isOpen;
  },
};

/*
   ---------------------- Actions -------------------------------
 */

export type ActionsPayload = {
  setModalState: [payload: IModalState, returnVal: void];
};

export const actions: Actions = {
  setModalState({ commit }, payload: IModalState): void {
    commit('SET_MODAL_STATE', payload);
  },
};

/*
   ---------------------- Actions no change code -----------------------------
 */

type Actions = {
  [Property in keyof ActionsPayload]: (
    augContext: AugmentedActionContext,
    payload: ActionsPayload[Property][0]
  ) => ActionsPayload[Property][1];
};

type AugmentedActionContext = {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions
  ): void;
} & Omit<ActionContext<State, State>, 'commit'>;

/*
   ---------------------- Mutations - no change code ------------------------
 */

type Mutations = {
  [Property in keyof MutationPayload]: (
    state: State,
    payload: MutationPayload[Property]
  ) => void;
};

/*
   ---------------------- Getters - no change code -------------------------------
 */
type State = typeof initialState;
