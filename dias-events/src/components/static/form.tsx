import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { PureControlGroup, PureControlYesNo, PureRadioGroup, PureU1 } from 'components/common/grid';
import { calcValidate, checkAgree, setMember, submitCoupon } from './staticredux';
import { PayPal } from './paypal';

type Bootcamp = {
    id: string;
    location: string;
    address: string;
    presenter: string;
    title: string;
    description: string;
    bio: string;
};

type BootcampList = {
    camps: Bootcamp[];
};

const BootcampRadioGroup = ({ camps }: BootcampList) => {
    const buttons = camps.map((item, index) => (
        <PureU1 key={index}>
            <label>
                <Field name="camps" component="input" type="radio" value={item.id} /> {item.location} - {item.address}
            </label>
            <h4>
                {item.title}
            </h4>
            <p>
                <b>Presenter</b>: {item.presenter}
            </p>
            <p>
                <b>Description</b>: {item.description}
            </p>
            <p>
                {item.bio}
            </p>
            <hr />
        </PureU1>
    ));

    return <>{buttons}</>;
};

const ScbwiFormInternal = (props: any) => {
    const bootcamps = [
        {
            id: '1',
            location: 'Miami',
            address: 'John Martin\'s Irish Pub 253 Miracle Mile Coral Gables, FL 33134',
            presenter: 'Christina Diaz Gonzalez and Danielle Joseph',
            title: 'Secrets Revealed: From character to plot—discover what your story hasn’t told you yet.',
            description: `In this workshop you can find out how to bring out those hidden motivations and outside 
            influences that can shape your characters and plot whether they make it onto the page or remain part 
            of the backstory. Learn how to listen to the signals already provided by your characters and plotline 
            to help make your story jump off the page.

            Bring your work-in-progress or story ideas and be ready to add another layer of depth to your characters 
            and plot. Materials needed: laptop or pen/paper.`,
            bio: `Danielle Joseph is the author of the young adult novels, Shrinking Violet, Indigo Blues and Pure Red. 
            Shrinking Violet was adapted into the Disney Channel movie, Radio Rebel. Danielle’s picture book, I Want 
            to Ride the Tap Tap hits the shelves in Spring 2020! Christina Diaz Gonzalez is the award-winning author 
            of several books including The Red Umbrella, A Thunderous Whisper, the Moving Target series, and 
            Stormspeaker (part of the Spirit Animals: Fall of the Beasts series). Her books have received numerous 
            honors including the American Library Association’s Best Fiction for Young Adults, the Florida Book 
            Award, the Nebraska Book Award, and Junior Library Guild selection.`
        },
        {
            id: '2',
            location: 'Tampa',
            address: 'The Portico 1001 N Florida Ave. Tampa, FL 33602',
            presenter: 'Rob Sanders',
            title: 'Picture Books: The Next Level',
            description: `In this Boot Camp, I’ll share practical tips that have helped me sell twelve 
            picture books to major publishers in the last eight years. You’ll discover the wide array of 
            possibilities for picture books, determine if there’s a better structure for your story, and 
            learn seven ways to impact the quality of your writing so your picture book story can become a 
            picture book manuscript that will stand out in the crowd. We’ll be workshopping manuscripts during 
            this session—so bring one or more completed picture book manuscripts and be prepared for hands-on 
            writing and revision opportunities. You’ll need: Your manuscripts, a laptop (or other favorite 
            writing supplies), and an adventurous spirit.`,
            bio: `Rob Sanders is a teacher who writes and a writer who teaches. He has published both 
            fiction and nonfiction picture books with some of the top publishers in the industry, coaches 
            and critiques fellow writers, and organizes SCBWI Florida free meetings in the Tampa Bay area.`
        },
        {
            id: '3',
            location: 'Merritt Island/Titusville Area',
            address: 'Ocean Landings Resort 900 N Atlantic Ave. Cocoa Beach, FL 32931',
            presenter: 'Lorin Oberweger',
            title: 'Breaking Through and Breaking Out: Take your writing from “almost there” to ALL THE WAY.',
            description: `This workshop is for the solid mid-list author, the “I liked this so much but didn’t LOVE it” 
            writer, and/or the ones who have worked and worked and feel THIS close to success. In this workshop, 
            we’ll dig into techniques of voice, characterization, concept and more to help you take your writing—and 
            your career—to new heights. Please bring your manuscript, a laptop or notepad (or both) and your 
            willingness to go deep and work hard. See you there!`,
            bio: `Lorin Oberweger is a sought-after independent book editor, ghost writer, and literary agent with 
            Adams Literary. Her company, Free Expressions, runs writing craft workshops nationwide. She’s also the 
            co-author of three novels, Boomerang, Rebound, and Bounce, published by HarperCollins.`
        },
        {
            id: '4',
            location: 'Oviedo',
            address: 'Seminole County Sheriff’s Office-East Region 1225 East Broadway St. Oviedo, FL 32765',
            presenter: 'Sarah Nicolas',
            title: 'Promote Yourself as an Author–Before and After Publication',
            description: `To succeed as an author, you’re going to need to constantly promote yourself throughout 
            your career. It’s never too early or too late to start. Author and book publicist Sarah Nicolas will 
            discuss things you can do at any stage to promote yourself, including social media for authors and 
            both online and offline networking opportunities. Sarah, who also writes as Aria Kane, will discuss 
            reasons for using a pen name and how to choose a pen name that works for you. She’ll then discuss how 
            to craft both elevator pitches and longer pitches, like back cover copy and query letters. Also, 
            learn every item an author needs in their modern press kit.`,
            bio: `Sarah Nicolas is a recovering mechanical engineer, library event planner, and author who lives 
            in Orlando with a 60-lb mutt who thinks he’s a chihuahua. She’s the author of Keeping Her Secret and 
            Dragons are People, Too.`
        },
        {
            id: '5',
            location: 'Pembroke Pines',
            address: `The Classroom at South Regional BC Library South Regional/Broward College Library 7300 Pines 
            Blvd. Pembroke Pines, FL 33024`,
            presenter: 'Lynne Marie',
            title: 'Have a promising Picture Book manuscript and need a kick in the pants to bring it from rough to ready and headed down the path to success?',
            description: `Then this BOOTCAMP is just the TRAINING you need for PB FITNESS. This program is designed 
            to BUILD STRENGTH in your manuscript through INTENSE personal EXERCISE and re-visioning over the course 
            of our day. You will begin your BOOT CAMP TRAINING as soon as you register. 1. Choose a Manuscript that 
            needs this FITNESS program. Bring it as far as you can on your own and/or with the help of your critique 
            group. 2. Find five (5) Comp Titles for this project, published within the last 3 years. Order these 
            books into the Library or purchase them so that you may bring them with you for a focused EXERCISE. 
            3. Write a pitch for your story of no more than three lines. 4. Bring two copies of your manuscripts, 
            a folder with paper, scissors, tape and post-it notes and pencils. We are going to actually make Picture 
            Book Dummies of your story to share. REQUIREMENTS: Must have a completed Picture Book Manuscript and be 
            willing to do Boot Camp preparation to get the maximum benefit of this camp. Supplies are mandatory in 
            order to facilitate the exercises.`,
            bio: `Lynne Marie is the author of Hedgehog Goes to Kindergarten (Scholastic), Hedgehog’s 100th 
            Day of School (Scholastic), The Star in the Christmas Play (Beaming Books), Let’s Eat Around the World 
            (Beaming Books), and Moldilocks and the 3 Scares (Sterling), plus more forthcoming.`
        },
        {
            id: '6',
            location: 'Davie',
            address: 'Broward College Building 9, Room 227 (on the second floor) 3501 Davie Rd. Davie, FL 33314',
            presenter: 'Joyce Sweeney and Marjetta Geerling',
            title: 'Can We Talk About Dialog?',
            description: `Dialog is the driving force in fiction, helping us understand characters, perceive conflict 
            and sense the pace of a story. This is what we tune in for, to hear what people are saying. But there 
            are so many pitfalls to writing dialog that is true to life and yet entertaining and well-paced. 
            Marjetta Geerling and Joyce Sweeney are dialog lovers who can’t wait to break it down for you. We 
            have ideas and exercises to get your characters talking in a way that will pull readers deep into 
            your story. This workshop is for Middle Grade and Young Adult writers only.`,
            bio: `Joyce Sweeney is the author of fourteen young adult novels and two books of poetry. 
            She teaches online classes at www.sweeneywritingcoach.com and has mentored 59 students to traditional 
            publication. She is currently working on a historical fantasy novel and is represented by Nicole Resciniti 
            of the Seymour agency.

            Marjetta Geerling is the author of the young adult novel Fancy White Trash (Viking, 2008), an American 
            Library Association’s 2009 Best Books for Young Adults and Rainbow List selection. She holds an M.F.A. 
            in Writing from Spalding University and is an Asst. Professor of English at Broward College. Marjetta 
            is represented by Nicole Resciniti at The Seymour Agency.`
        },
        {
            id: '7',
            location: 'Gainesville',
            address: 'Saint Leo University Gainesville Education Center Magnolia Parke 4650-B NW 39th Place Gainesville, FL 32606',
            presenter: 'Margaret Mincks',
            title: 'Character Architecture: Building Your Characters from the Ground Up',
            description: `The basis for any good character is a solid foundation, so break out your hard hats and 
            drawing boards (don’t worry, a laptop or old-school notebook will do) and delve into the art and design 
            of character development. In this workshop, Margaret will continue to annoyingly extend metaphors and 
            share strategies for building solid, interesting characters that come alive on the page, enliven your 
            plot, push the action, and define your character’s core conflicts. Bring either your 
            work/characters-in-progress or simply your imagination and willingness to create exciting characters from 
            scratch!`,
            bio: `Margaret Mincks is the author of Payback on Poplar Lane, her debut middle-grade novel. She’s also 
            the former editor of Spider, a literary magazine for 6- to 9-year olds.`
        },
        {
            id: '8',
            location: 'Sarasota',
            address: 'Ringling College of Art + Design Goldstein Library, Room 113; 2700 Bradenton Road Sarasota, FL 34234',
            presenter: 'Katherin Blackmore and Linda Shute',
            title: 'Creative Composition - A Day of Craft for Illustrators',
            description: `Good design should always precede technique. Build emotion, legibility, and interest into your 
            pictures using design elements of mass, scale, focal points, and more.`,
            bio: `Katherine Blackmore is an illustrator represented by KidShannon Agency, and former animation instructor 
            at Full Sail University.

            Linda Shute is an author/illustrator, former instructor at Ringling College of Art + Design, and your SCBWI-FL 
            Illustrator Coordinator.`
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

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className="pure-form pure-form-aligned">
            <fieldset>
                <legend>Membership (Required)</legend>
                <PureControlYesNo htmlFor="member" label="Are you a member?" handleChange={props.setMember} />
            </fieldset>
            <fieldset>
                <legend>Basic Info (Required)</legend>

                <PureControlGroup htmlFor="firstname" label="First Name" />
                <PureControlGroup htmlFor="lastname" label="Last Name" />
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
                <legend>Choose a bootcamp ${props.member ? '75' : '100'}</legend>
                <BootcampRadioGroup camps={bootcamps} />
            </fieldset>
            <fieldset>
                <legend>
                    <b>Important</b>: SCBWI's Anti-Harassment Policy
                </legend>
                <div>
                    The Society of Children’s Book Writers and Illustrators (SCBWI) is dedicated to providing a safe and
                    harassment-free environment for all of its members and has a zero-tolerance policy regarding
                    harassment, intimidation, and discrimination. This includes all harassment, intimidation, and
                    discrimination made on the basis of race, age, sex, gender, gender identity and expression, sexual
                    orientation, national origin, ancestry, disability, medical condition, religion, class, body size,
                    veteran status, marital/domestic partnership status, citizenship or any other marginalized identity.
                    Harassment includes verbal comments, written comments, displayed images, or behaviors such as
                    deliberate intimidation, stalking, body policing, unwelcome photography or recording, sustained
                    disruption of talks or other events, inappropriate physical contact, unwelcome sexual attention and
                    bullying or coercion of any kind, in particular forcing another to accept your beliefs.
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
                        <PureControlGroup htmlFor="coupon" label="Coupon Code" message="If applicable" />
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
                            Please note that all registrations are <b>final</b>. There will be <b>no refunds given</b>.
                        </p>
                        <p>
                            {props.loading ? 'Calculating totals...' : `Your subtotal is $${props.subtotal}.00`}
                            <br />
                            {props.loading ? 'Calculating totals...' : `Your total is $${props.total}.00`}
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
    asyncBlurFields: ['member']
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
