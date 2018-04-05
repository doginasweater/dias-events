declare module Api {
    // Models\DTOs\AnswerType.cs
    export type AnswerType =
        'MultiLineText' |
        'SingleLineText' |
        'SelectBox' |
        'RadioButtons' |
        'Checkbox' |
        'TimeSlotChoice';
    
    // Models\DTOs\CouponType.cs
    export type CouponType =
        'FlatReduction' |
        'PercentageReduction' |
        'ItemFlatReduction' |
        'ItemPercentageReduction';
    
    // Models\DTOs\EntryState.cs
    export type EntryState =
        'Closed' |
        'Open' |
        'Hidden';
    
    // Models\DTOs\EntryType.cs
    export type EntryType =
        'Header' |
        'Section' |
        'Separator' |
        'TextBlock' |
        'Question' |
        'Continue' |
        'Submit' |
        'Payment';
    
    // Models\DTOs\TotalRequest.cs
    export interface TotalRequest {
        member: boolean;
        intensives: string;
        workshops: string;
        manuscriptcritiques: number;
        portfoliocritiques: number;
        coupon: string;
    }

}