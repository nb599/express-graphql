import Sequelize from 'sequelize';


const sequelize = new Sequelize(
  'apartment',
  'apartment',
  'eLKdHcK3P2aR8y78', {
    host: '39.106.122.197',
    port: '3306',
    dialect: 'mysql',
  },
);

const db = {
  User: sequelize.import('./user'),
  Board: sequelize.import('./board'),
  Suggestion: sequelize.import('./suggestion'),
  Activity: sequelize.import('./activity'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;