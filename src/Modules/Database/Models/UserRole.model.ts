import { Table } from 'sequelize-typescript';
import { InferModel } from '.';

@Table({
  tableName: 'UserRole',
  freezeTableName: true,
})
export default class UserRole extends InferModel {
  id: number;
  user_id: number;
  role_id: number;
}
