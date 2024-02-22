import { Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Roles',
  freezeTableName: true,
})
export default class Roles extends Model {
  id: string;
  login: string;
}
