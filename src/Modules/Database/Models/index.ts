import { ModelCtor } from 'sequelize-typescript';
import Users from './User.model';
import UserRole from './UserRole.model';
import Roles from './Role.model';

export const models: ModelCtor[] = [Users, Roles, UserRole];
