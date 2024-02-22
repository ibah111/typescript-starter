import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { join } from 'path';
import createUmzug from '../umzug';
import { InjectConnection } from '@nestjs/sequelize';
@Injectable()
export class LocalDatabaseSeed implements OnModuleInit {
  constructor(
    @InjectConnection('sqlite.local') private readonly sequelize: Sequelize,
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
      join(__dirname, 'Seeds'),
      'SeedMeta',
    );
    await umzug.up();
  }
}
