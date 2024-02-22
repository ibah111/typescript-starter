import { Table } from 'sequelize-typescript';
import { InferModel } from '.';

@Table({
  tableName: 'Roles',
  freezeTableName: true,
})
export default class Roles extends InferModel {
  id: string;
  login: string;
}
