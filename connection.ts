import { DataSource } from 'typeorm';
import { User } from './Entity/UserEntity';

export const appDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test_user',
  entities: [User],
  synchronize: true,
  logging: true,
});
