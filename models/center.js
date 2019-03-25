/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('center', {
    field_1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_9: {
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
    tableName: 'center'
  });
};