import { FormGroup, ValidatorFn } from "@angular/forms";


export function matchPasswordsValidator(passValueOne: string, passValueTwo: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const passOne = group.get(passValueOne);
        const passTwo = group.get(passValueTwo);

        return passOne?.value === passTwo?.value ? null : { matchPasswordsValidator: true };
    };
}