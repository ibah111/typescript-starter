import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';

export const up: MigrationFn<QueryInterface> = ({ context }) =>
  context.sequelize.transaction((transaction) =>
    Promise.all([
      context.sequelize.models.User.bulkCreate(
        [{ id: 1, login: 'baledin@zakon43.ru' }],
        { transaction },
      ),
    ]),
  );
