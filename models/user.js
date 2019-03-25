/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    seq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    height: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'user'
  });
};
