import { Table } from 'sequelize-typescript';
import { InferModel } from '.';

@Table({
  tableName: 'Users',
  freezeTableName: true,
})
export default class Users extends InferModel {
  id: number;
  name: string;
}
