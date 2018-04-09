import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { PureControlGroup, PureControlYesNo, PureRadioGroup } from 'components/common/grid';
import { required, mustBeMember } from 'utilities/validators';
import { calcValidate, checkAgree, setMember, submitCoupon } from './staticredux';
import { PayPal } from './paypal';

const ScbwiFormInternal = (props: any) => {
    const workshops = [
        {
            label:
                'Picture Book: Presented by Marla Frazee, Liz Garton Scanlon, Kait Feldmann, and Nancy Brennan',
            value: 'picture-book'
        },
        {
            label: 'Middle Grade: Presented by Erin Entrada Kelly and Tricia Lin',
            value: 'middle-grade'
        },
        {
            label: 'Young Adult Track: Presented by Kat Brzozowski and Siobhan Vivian',
            value: 'young-adult'
        },
        {
            label: 'Science Fiction/Fantasy: Presented by Janice Hardy and Michael Stearns',
            value: 'scifi'
        },
        {
            label: 'Series and Sequels: Presented by Lisa Yee and Alexandra Penfold',
            value: 'series'
        }
    ];

    const intensives = [
        {
            label: 'None',
            value: ''
        },
        {
            label:
                'Picture Book Intensive: Presented by Alexandra Penfold, Michael Stearns, and Liz Garton Scanlon (Max 20 attendees)',
            value: 'picture-book-intensive'
        },
        {
            label:
                'Novel Intensive: Presented by Lisa Yee, Kait Feldmann, and Janice Hardy (Max 25 attendees)',
            value: 'novel-intensive'
        },
        {
            label:
                'Illustrator Intensive: Presented by Marla Frazee and Nancy Brennan (Max 25 attendees)',
            value: 'illustrator-intensive'
        }
    ];

    const critiques = [
        {
            label: '0',
            value: '0'
        },
        {
            label: '1',
            value: '1'
        },
        {
            label: '2',
            value: '2'
        },
        {
            label: '3',
            value: '3'
        },
        {
            label: '4',
            value: '4'
        },
        {
            label: '5',
            value: '5'
        }
    ];

    const SubmitFieldset = () => {
        let retVal = (
            <fieldset>
                <legend>Click the PayPal button to pay and save your registration</legend>
                <div className="pure-controls">
                    <PayPal
                        env={props.env}
                        disabled={false}
                        commit={true}
                        sandbox={props.sandbox}
                        production={props.production}
                        amount={props.total}
                    />
                </div>
            </fieldset>
        );

        if (props.total === 0 && props.total < props.subtotal) {
            retVal = (
                <fieldset>
                    <legend>Your registration is free, so click here to submit.</legend>
                    <div className="pure-controls">
                        <button className="pure-button pure-button-primary" type="submit">
                            Submit Registration
                        </button>
                    </div>
                </fieldset>
            );
        }
        return retVal;
    };

    const { dispatch, handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit} className="pure-form pure-form-aligned">
            <fieldset>
                <legend>Membership (Required)</legend>
                <PureControlYesNo
                    htmlFor="member"
                    label="Are you a member?"
                    handleChange={props.setMember}
                />
            </fieldset>
            <fieldset>
                <legend>Basic Info (Required)</legend>

                <PureControlGroup htmlFor="firstname" label="First Name" />
                <PureControlGroup htmlFor="lastname" label="Last Name" />
                <PureControlGroup
                    htmlFor="badgename"
                    label="Badge Name"
                    message="If different from your regular name"
                />
                <PureControlGroup htmlFor="address1" label="Address 1" />
                <PureControlGroup htmlFor="address2" label="Address 2" />
                <PureControlGroup htmlFor="city" label="City" />
                <PureControlGroup htmlFor="state" label="State/Province" />
                <PureControlGroup htmlFor="postalcode" label="Zip/Postal Code" />
                <div className="pure-control-group">
                    <label htmlFor="country">Country</label>
                    <Field name="country" component="select">
                        <option value="US">United States</option>
                        <option value="Canada">Canada</option>
                    </Field>
                </div>
                <PureControlGroup htmlFor="email" label="Email Address" />
                <PureControlGroup htmlFor="phone" label="Phone" />
            </fieldset>
            <fieldset>
                <legend>Workshops (Required, ${props.member ? '250' : '280'})</legend>
                <PureRadioGroup
                    groupName="workshops"
                    groupLabel="Please select a workshop"
                    values={workshops}
                />
            </fieldset>
            <fieldset>
                <legend>Intensives (Optional, Members Only, $250)</legend>
                <PureRadioGroup
                    groupName="intensives"
                    groupLabel="Select an intensive"
                    values={intensives}
                />
            </fieldset>
            <fieldset>
                <legend>Manuscript Critiques (Optional, $60 each)</legend>
                <PureRadioGroup
                    groupLabel="Please select how many critiques you would like (if any)"
                    groupName="manuscriptcritiques"
                    values={critiques}
                />
            </fieldset>
            <fieldset>
                <legend>Portfolio Critiques (Optional, $60 each)</legend>
                <PureRadioGroup
                    groupLabel="Please select how many critiques you would like (if any)"
                    groupName="portfoliocritiques"
                    values={critiques}
                />
                <p>
                    Please remember to request your reviews from{' '}
                    <a href="mailto:submissions@scbwiflorida.com">submissions@scbwiflorida.com</a>{' '}
                    once you have completed your registration.
                </p>
            </fieldset>
            <fieldset>
                <legend>
                    <b>Important</b>: SCBWI's Anti-Harassment Policy
                </legend>
                <div>
                    SCBWI takes harassment very seriously.{' '}
                    <a href="https://www.scbwi.org/anti-harassment-statement/" target="_blank">
                        Please read the policy
                    </a>, as agreement is required to register.
                </div>
                <div className="pure-controls">
                    <label className="pure-checkbox">
                        <Field
                            type="checkbox"
                            component="input"
                            name="harassmentpolicy"
                            onChange={event => props.checkAgree(event!.target.value)}
                        />{' '}
                        I have read, and agree to, the{' '}
                        <a href="https://www.scbwi.org/anti-harassment-statement/" target="_blank">
                            SCBWI Anti-Harassment Policy
                        </a>
                    </label>
                </div>
            </fieldset>
            {props.agreed && (
                <>
                    <fieldset>
                        <legend>Coupon</legend>
                        <PureControlGroup
                            htmlFor="coupon"
                            label="Coupon Code"
                            message="If applicable"
                        />
                        <div className="pure-controls">
                            <button
                                className="pure-button pure-button-primary"
                                type="button"
                                onClick={props.submitCoupon}
                            >
                                Check coupon
                            </button>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Totals</legend>
                        <p>
                            Please note that all registrations are <b>final</b>. There will be{' '}
                            <b>no refunds given</b>.
                        </p>
                        <p>
                            {props.loading
                                ? 'Calculating totals...'
                                : `Your subtotal is $${props.subtotal}.00`}
                            <br />
                            {props.loading
                                ? 'Calculating totals...'
                                : `Your total is $${props.total}.00`}
                        </p>
                    </fieldset>
                    <SubmitFieldset />
                </>
            )}
        </form>
    );
};

const ScbwiFormMid: any = reduxForm({
    form: 'scbwi',
    asyncValidate: calcValidate,
    asyncBlurFields: [ 'member', 'workshops', 'intensives', 'manuscriptcritiques', 'portfoliocritiques' ]
})(ScbwiFormInternal);

export const ScbwiForm: any = connect(
    (state: any) => ({
        initialValues: state.staticReducer.reg,
        agreed: state.staticReducer.agreed,
        total: state.staticReducer.total,
        subtotal: state.staticReducer.subtotal,
        loading: state.staticReducer.loading,
        member: state.staticReducer.member,
        env: state.staticReducer.env,
        sandbox: state.staticReducer.sandbox,
        production: state.staticReducer.production
    }),
    {
        checkAgree,
        setMember,
        submitCoupon
    }
)(ScbwiFormMid);
