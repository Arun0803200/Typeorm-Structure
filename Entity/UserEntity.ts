import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tbl_user')
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  public id: number;

  @Column({ name: 'first_name', type: 'varchar', length: '255' })
  public firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: '225' })
  public lastName: string;

  @Column({ name: 'username', type: 'varchar', length: '255' })
  public username: string;
}
