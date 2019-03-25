/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('left_1', {
    field_1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    seq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dataset',
        key: 'seq'
      }
    },
    created_at: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dataset',
        key: 'created_at'
      }
    }
  }, {
    tableName: 'left_1'
  });
};
