import { UserRole } from './../roles/models/user-role.entity';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Role } from '../roles/models/roles.entity';

@Table({ tableName: 'User' })
export class User extends Model<User> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Role, () => UserRole)
  role: Role[];
}
