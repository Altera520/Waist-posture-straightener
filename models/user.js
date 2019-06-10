/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
  }, {
    tableName: 'user'
  });
};
