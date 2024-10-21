export interface IRegister {
    email: string,
    password: string,
    name: string,
    address: string,
    phone: string
}

export type TRegisterErrors = Partial<IRegister>