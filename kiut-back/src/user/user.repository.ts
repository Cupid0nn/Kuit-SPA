import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/dto´s/createuserdto";
import { User } from "src/entityes/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    // Crear usuario 
    async createUser(createUserDto: CreateUserDto): Promise<Partial<User>> {
        try {
            const newUser = this.userRepository.create(createUserDto); // No requiere await
            await this.userRepository.save(newUser);
            const { password, ...userNoPassword } = newUser;
            return userNoPassword;
        } catch (error) {
            // Detecta errores comunes de la base de datos
            if (error.code === '23505') { // Ejemplo: código para "clave duplicada" en Postgres
                throw new BadRequestException('El usuario ya existe.');
            }
            console.error('Error creating user:', error);
            throw new InternalServerErrorException('Ocurrió un error al crear el usuario.');
        }
    }

    // Obtener todos los usuarios 
    async getUsers(): Promise<Partial<User>[]> {
        try {
            const users = await this.userRepository.find();
            return users.map(({ password, ...userNoPassword }) => userNoPassword);
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new InternalServerErrorException('Ocurrió un error al obtener los usuarios.');
        }
    }

    // Eliminar usuario 
    async deleteUser(id: string): Promise<{ message: string; user: Partial<User> }> {
        try {
            const user = await this.userRepository.findOneBy({ id });
            if (!user) {
                throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
            }
            await this.userRepository.remove(user);
            const { password, ...userNoPassword } = user;
            return {
                message: 'USUARIO ELIMINADO',
                user: userNoPassword,
            };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error; // Re-lanza excepciones específicas
            }
            console.error('Error deleting user:', error);
            throw new InternalServerErrorException('Ocurrió un error al eliminar el usuario.');
        }
    }

    async updateUser(id: string, updateUserDto: CreateUserDto): Promise<Partial<User>> {
        try {
            const user = await this.userRepository.findOneBy({ id });
            if (!user) {
                throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
            }
            Object.assign(user, updateUserDto);
            await this.userRepository.save(user);
            const { password,image, ...userNoPassword } = user;
            return userNoPassword;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error; // Re-lanza excepciones específicas
            }
            console.error('Error updating user:', error);
            throw new InternalServerErrorException('Ocurrió un error al actualizar el usuario.');
        }
    }

    async getUserById(id: string): Promise<Partial<User>> {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
        }
        const { password, ...userNoPassword } = user;
        return userNoPassword;
    }
}
