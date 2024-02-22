import { Model, ModelCtor } from 'sequelize-typescript';
import Users from './User.model';
import UserRole from './UserRole.model';
import Roles from './Role.model';
import { InferAttributes, InferCreationAttributes } from 'sequelize';

export class InferModel extends Model<
  InferAttributes<InferModel>,
  InferCreationAttributes<InferModel>
> {}

export const models: ModelCtor[] = [Users, Roles, UserRole];
