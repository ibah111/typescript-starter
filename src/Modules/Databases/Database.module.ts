import { Module } from '@nestjs/common';
import LocalDatabase from './Sqlite.Local.Database';
@Module({
  imports: [LocalDatabase],
})
export default class DatabaseModule {}
