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
@Table({ tableName: 'Users' })
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: CreationOptional<number>;
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  login: string;
}
