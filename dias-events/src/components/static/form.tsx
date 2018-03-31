import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PureControlGroup, PureControlYesNo, PureRadioGroup } from 'components/common/grid';
import { required, mustBeMember } from 'utilities/validators';

const ScbwiFormInternal = (props: any) => {
    console.log('props', props);

    const workshops = [
        {
            label: 'Picture Book: Presented by Marla Frazee, Liz Garton Scanlon, Kait Feldmann, and Nancy Brennan',
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
            label: 'Picture Book Intensive: Presented by Alexandra Penfold, Michael Stearns, and Liz Garton Scanlon (Max 20 attendees)',
            value: 'picture-book-intensive'
        },
        {
            label: 'Novel Intensive: Presented by Lisa Yee, Kait Feldmann, and Janice Hardy (Max 25 attendees)',
            value: 'novel-intensive'
        },
        {
            label: 'Illustrator Intensive: Presented by Marla Frazee and Nancy Brennan (Max 25 attendees)',
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

    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit} className="pure-form pure-form-aligned">
            <fieldset>
                <legend>Membership (Required)</legend>
                <PureControlYesNo htmlFor="member" label="Are you a member?" />
            </fieldset>
            <fieldset>
                <legend>Basic Info (Required)</legend>

                <PureControlGroup htmlFor="firstname" label="First Name" />
                <PureControlGroup htmlFor="lastname" label="Last Name" />
                <PureControlGroup htmlFor="badgename" label="Badge Name" message="If different from your regular name" />
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
                <legend>Workshops (Required)</legend>
                <PureRadioGroup groupName="workshops" groupLabel="Please select a workshop" values={workshops} />
            </fieldset>
            <fieldset>
                <legend>Intensives (Optional, Members Only)</legend>
                <PureRadioGroup groupName="intensives" groupLabel="Select an intensive" values={intensives} />
            </fieldset>
            <fieldset>
                <legend>Manuscript Critiques (Optional, $60 each)</legend>
                <PureRadioGroup groupLabel="Please select how many critiques you would like (if any)" groupName="manuscriptcritiques" values={critiques} />
            </fieldset>
            <fieldset>
                <legend>Portfolio Critiques (Optional, $60 each)</legend>
                <PureRadioGroup groupLabel="Please select how many critiques you would like (if any)" groupName="portfoliocritiques" values={critiques} />
                <p>
                    Please remember to request your reviews from <a href="mailto:submissions@scbwiflorida.com">submissions@scbwiflorida.com</a> once you
                    have completed your registration.
                </p>
            </fieldset>
            <fieldset>
                <legend>Coupon</legend>
                <PureControlGroup htmlFor="coupon" label="Coupon Code" message="If applicable" />
                <div className="pure-controls">
                    <button className="pure-button pure-button-primary" type="button">Submit Coupon</button>
                </div>
            </fieldset>
            <fieldset>
                <legend>Totals</legend>
                <p>
                    Please note that all registrations are <b>final</b>. There will be <b>no refunds given</b>.
                </p>
                <p>
                    Your total is $total
                </p>
            </fieldset>
            <fieldset>
                <legend><b>Important</b>: SCBWI's Anti-Harassment Policy</legend>
                <div>
                    SCBWI takes harassment very seriously. <a href="https://www.scbwi.org/anti-harassment-statement/" target="_blank">
                        Please read the policy
                    </a>, as agreement is required to register.
                </div>
                <div className="pure-controls">
                    <label className="pure-checkbox">
                        <Field type="checkbox" component="input" name="harassmentpolicy" /> I have read, and agree to,
                        the <a href="https://www.scbwi.org/anti-harassment-statement/" target="_blank">SCBWI Anti-Harassment Policy</a>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Submit</legend>
                <div className="pure-controls">
                    <button className="pure-button pure-button-primary" type="submit" disabled={pristine || submitting}>Submit</button>
                </div>
            </fieldset>
        </form>
    );
};

export const ScbwiForm = reduxForm({
    form: 'scbwi'
})(ScbwiFormInternal);
