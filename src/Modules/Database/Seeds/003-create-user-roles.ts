import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';

export const up: MigrationFn<QueryInterface> = ({ context }) =>
  context.sequelize.transaction((transaction) =>
    Promise.all([
      context.sequelize.models.User_Role.bulkCreate(
        [{ user_id: 1, role_id: 1 }],
        { transaction },
      ),
    ]),
  );
