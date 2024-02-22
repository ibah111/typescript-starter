import { ModelCtor } from 'sequelize-typescript';
import { User } from './User.model';
import { UserRoles } from './UserRoles.model';
import { Roles } from './Role.model';

export const models: ModelCtor[] = [User, Roles, UserRoles];
