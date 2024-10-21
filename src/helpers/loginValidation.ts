import { ILogin, ILoginErrors } from "@/interfaces/LoginInterfaces";

export function loginValidation(values: ILogin) {
    const errors: ILoginErrors = {}

    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    }
    return errors;
}