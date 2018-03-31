export const required = (value: any, allValues: any, props: any) => value ? undefined : 'This field is required';
export const mustBeMember = (value: any, allValues: any, props: any) => allValues.member ? undefined : 'You must be a member';
