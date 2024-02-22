import { DataTypes, QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';

export const up: MigrationFn<QueryInterface> = ({ context }) =>
  context.sequelize.transaction((transaction) =>
    Promise.all([
      context.createTable(
        'Roles',
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          name: { type: DataTypes.STRING, allowNull: false, unique: true },
          title: { type: DataTypes.STRING, allowNull: false },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
        },
        { transaction },
      ),
    ]),
  );

export const down: MigrationFn<QueryInterface> = ({ context }) =>
  context.sequelize.transaction((transaction) =>
    Promise.all([
      context.dropTable('Roles', {
        transaction,
      }),
    ]),
  );
