export type Result<T> = {
    ok: boolean;
    data: T;
    error?: string;
};

export type Validator = (value: string | number, allValues: (string | number)[]) => Result<string>;

export interface Field<T> {
    id: string;
    name: string;
    label?: string;
    size: string;
    validators: Validator[];
    disabled: boolean;
    touched: boolean;
    required: boolean;
    initialValue: T;
    value: T;
}

export interface Form {
    fields: Field<any>[];
    pristine: boolean;
    onSubmit: (values: any[]) => void;
    reset: () => void;
}
