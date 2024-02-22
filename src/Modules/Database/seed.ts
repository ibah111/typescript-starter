import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { join } from 'path';
import createUmzug from '../umzug';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class LocalDatabaseSeed implements OnModuleInit {
  constructor(
    @InjectConnection('local') private readonly sequelize: Sequelize,
    @InjectConnection('contact') private readonly sequelizeContact: Sequelize,
  ) {}
  onModuleInit() {
    return this.sync();
  }
  async sync() {
    const umzug = createUmzug(
      this.sequelize,
      join(__dirname, 'Migrations'),
      'MigrationMeta',
    );

    try {
      await this.sequelizeContact.authenticate();
      await this.sequelize.authenticate();
      await umzug.up();
      await this.seed();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  async seed() {
    const umzug = createUmzug(
      this.sequelize,
      join(__dirname, 'seeds'),
      'SeedMeta',
    );
    await umzug.up();
  }
}
