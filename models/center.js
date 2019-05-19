/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var center = sequelize.define('center', {
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
    field_10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_13: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_14: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_15: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_16: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_17: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_18: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_19: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_21: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_22: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_23: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_24: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_25: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_26: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_27: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_28: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_29: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_30: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    field_31: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    pos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pos',
        key: 'pos'
      }
    },
    seq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pos',
        key: 'seq'
      }
    }
  }, {
    tableName: 'center'
  });

  center.associate = (models) =>{
    center.belongsTo(models.pos, {
      as: 'pos',
      foreignKey: 'pos'
    })

    center.belongsTo(models.pos, {
      as: 'seq',
      foreignKey: 'seq'
    })
  }

  return dev;
};
