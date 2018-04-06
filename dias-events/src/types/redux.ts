export interface IActionNoPayload {
    type: string;
}

export interface IAction<T> {
    type: string;
    payload: T;
}

export interface IdMap<T> {
    [id: string]: T;
}

export interface ReducerMap<TState> {
    [actionId: string]: (state: TState, action: IAction<any>) => TState;
}

export type Dispatch<TActionType> = (action: IAction<TActionType>) => void;
