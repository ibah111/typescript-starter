import {
  CreationOptional,
  ForeignKey as FK,
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
} from 'sequelize-typescript';
@Table({ tableName: 'UserRoles' })
export class UserRoles extends Model<
  InferAttributes<UserRoles>,
  InferCreationAttributes<UserRoles>
> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: CreationOptional<number>;
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: FK<number>;
  @AllowNull(false)
  @Column(DataType.INTEGER)
  role_id: FK<number>;
}
