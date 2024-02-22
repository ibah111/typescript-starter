import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { models } from './Models';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      name: 'local',
      storage: 'database.sqlite',
      models,
      logging: console.log,
    }),
  ],
})
export default class DatabaseModule {}
