import { Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'UserRole',
})
export default class UserRole extends Model {
  id: number;
  user_id: number;
  role_id: number;
}
