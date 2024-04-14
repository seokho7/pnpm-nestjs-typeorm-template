import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as process from 'process';

dotenv.config({
  path: path.join(__dirname, `../../.env`),
});

export const mysqlModuleOption = (): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_NAME,
    entities: [__dirname + '/entity/*.entity{.ts,.js}'],
  };
}
