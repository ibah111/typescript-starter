import { Module } from '@nestjs/common';
import { LocalDatabaseSeed } from './seed';
import { SequelizeModule } from '@nestjs/sequelize';
import { models } from './models';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      name: 'sqlite.local',
      storage: 'database.sqlite',
      models,
      logging: console.log,
    }),
  ],
  providers: [LocalDatabaseSeed],
})
export default class LocalDatabase {}
