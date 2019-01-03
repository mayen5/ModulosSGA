import { Rol } from './rol.interface';
export interface Usuario {
    usuarioId: number;
    nombre: string;
    login: string;
    password: string;
    email: string;
    rol: Rol;
}
