import { Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Users',
  freezeTableName: true,
})
export default class Users extends Model {
  id: number;
  name: string;
}
