import axios from 'axios';
import { submit } from 'redux-form';

export interface IRegistrationForm {
    member: 'yes' | 'no';
    firstname: string;
    lastname: string;
    badgename: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalcode: string;
    country: string;
    email: string;
    phone: string;
    camps: string;
    coupon: string;
}

interface IStatic {
    env: string;
    sandbox: string;
    production: string;
    reg: IRegistrationForm;
    agreed: boolean;
    subtotal: number;
    total: number;
    loading: boolean;
    member: boolean;
}

const initial: IStatic = {
    env: 'sandbox',
    sandbox: '',
    production: '',
    reg: {
        member: 'no',
        firstname: '',
        lastname: '',
        badgename: '',
        address1: '',
        address2: '',
        city: '',
        state: 'FL',
        postalcode: '',
        country: 'US',
        email: '',
        phone: '',
        camps: '',
        coupon: ''
    },
    agreed: false,
    subtotal: 0.0,
    total: 0.0,
    loading: false,
    member: false
};

const CHECKAGREE = 'CHECKAGREE';
const GETTOKEN = 'GETTOKEN';
const SETMEMBER = 'SETMEMBER';
const SETTOKEN = 'SETTOKEN';
const SETTOTAL = 'SETTOTAL';
const SUBMITCOUPON = 'SUBMITCOUPON';
const SUBMIT = 'SUBMITTING';
const SUBMITTED = 'SUBMITTED';

const calc = (dispatch: any, store: any) => {
    const { values } = store().form.scbwi;

    calcValidate(values, dispatch);
};

export const calcValidate = (values: any, dispatch: any) => {
    const toSubmit = {
        member: values.member === 'yes',
        camps: values.camps,
        coupon: values.coupon
    };

    return axios.post('/api/calctotal', toSubmit).then(response => {
        if (response.status !== 200) {
            console.error(`Error! ${response.statusText}`);
            return;
        }

        dispatch(setTotal(response.data.subtotal, response.data.total));
    });
};

export const handlePayment = (response: any) => (dispatch: any, store: any) => {
    if (response.state === 'approved') {
        dispatch(submit('scbwi'));
    }
};

export const checkAgree = (val: string) => (dispatch: any, store: any) => {
    const agree = val === '' || val === 'false';

    dispatch({ type: CHECKAGREE, agree });

    if (agree) {
        calc(dispatch, store);
    }
};

export const setMember = () => (dispatch: any, store: any) => {
    const { member } = store().form.scbwi.values;

    dispatch({ type: SETMEMBER, isMember: member !== 'yes' });
};

export const submitCoupon = () => (dispatch: any, store: any) => {
    const { coupon } = store().form.scbwi.values;

    dispatch({ type: SUBMITCOUPON });
    calc(dispatch, store);
};

export const submitForm = (form: IRegistrationForm) => (dispatch: any, store: any) => {
    dispatch({ type: SUBMIT });

    axios.post('/api/register', form).then(response => {
        if (response.status === 200) {
            dispatch({ type: SUBMITTED });
            window.location.href = '/thanks';
        }
    });
};

export const setTotal = (subtotal: number, total: number) => ({ type: SETTOTAL, subtotal, total });
export const setToken = (env: string, sandbox: string, production: string) => ({
    type: SETTOKEN,
    env,
    sandbox,
    production
});
export const getToken = () => (dispatch: any) => {
    axios.post('/api/token').then(response => {
        if (response.status !== 200) {
            console.error(`Error! ${response.statusText}`);
            return;
        }

        const env = response.data.env ? response.data.env : 'sandbox';

        dispatch(setToken(env, response.data.sandbox, response.data.production));
    });
};

export const staticReducer = (state: IStatic = initial, action: any) => {
    switch (action.type) {
        case CHECKAGREE:
            return {
                ...state,
                agreed: action.agree,
                loading: true
            };
        case SETMEMBER:
            return {
                ...state,
                member: action.isMember
            };
        case SETTOKEN:
            return {
                ...state,
                env: action.env,
                sandbox: action.sandbox,
                production: action.production
            };
        case SETTOTAL:
            return {
                ...state,
                total: action.total,
                subtotal: action.subtotal,
                loading: false
            };
        case SUBMITCOUPON:
        case SUBMIT:
            return {
                ...state,
                loading: true
            };
        case SUBMITTED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};
