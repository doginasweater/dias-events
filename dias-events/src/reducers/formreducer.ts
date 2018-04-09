import { IAction } from 'types/redux';
import { Field } from 'types/field';

const ITEMFOCUS = 'form/itemfocus';

export const focus = (name: string): IAction<string> => ({ type: ITEMFOCUS, payload: name });

interface FormState {
    fields: Field<any>;
}
