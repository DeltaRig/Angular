import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
            return new Promise(async resolve => {
                console.log("Validating uniqueness...");
                setTimeout(() => {
                    if (control.value === 'mosh') {
                        resolve({ shouldBeUnique: true });
                    } else {
                        resolve(null);
                    }
                }, 2000);
            });
    }

}