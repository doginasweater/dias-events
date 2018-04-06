import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from '../../store';
import { submit } from 'redux-form';

declare const paypal: any;

interface IPaypalProps {
    env: string;
    commit: boolean;
    amount: number;
    sandbox: string;
    production: string;
    disabled: boolean;
}

export class PayPal extends React.Component<IPaypalProps, {}> {
    constructor(props: IPaypalProps) {
        super(props);
    }

    public render() {
        const client = {
            sandbox: this.props.sandbox,
            production: this.props.production
        };

        const payment = (data: any, actions: any) =>
            actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: {
                                total: this.props.amount,
                                currency: 'USD'
                            }
                        }
                    ]
                }
            });

        const onAuthorize = (data: any, actions: any) => {
            actions.payment.execute().then((response: any) => {
                if (response.state === 'approved') {
                    store.dispatch(submit('scbwi'));
                }
            });
        };

        const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

        return (
            <PayPalButton
                client={client}
                payment={payment}
                commit={this.props.commit}
                onAuthorize={onAuthorize}
                disabled={this.props.disabled}
                env={this.props.env}
            />
        );
    }
}
