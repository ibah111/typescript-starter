import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
@Table({ tableName: 'Roles' })
export class Roles extends Model<
  InferAttributes<Roles>,
  InferCreationAttributes<Roles>
> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: CreationOptional<number>;
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;
  @AllowNull(false)
  @Column(DataType.STRING)
  title: string;
}
