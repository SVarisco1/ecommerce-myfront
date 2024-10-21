import { IRegister, TRegisterErrors } from "@/interfaces/RegisterInterfaces";

export function registerValidation(values: IRegister) {
    const errors: TRegisterErrors = {}

    if (values.password && /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(values.password)) {
        errors.password = "Password must be at least 8 characters"
    }
    return errors;

}