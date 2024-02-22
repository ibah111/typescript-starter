import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';

export const up: MigrationFn<QueryInterface> = ({ context }) =>
  context.sequelize.transaction((transaction) =>
    Promise.all([
      context.sequelize.models.Role.bulkCreate(
        [
          { id: 1, name: 'admin', title: 'Администратор' },
          { id: 2, name: 'moderator', title: 'Модератор' },
        ],
        { transaction },
      ),
    ]),
  );
