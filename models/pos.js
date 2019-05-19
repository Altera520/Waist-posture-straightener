/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var pos = sequelize.define('pos', {
    pos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    seq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'seq'
      }
    }
  }, {
    tableName: 'pos'
  });

  center.belongsTo(models.user, {
    as: 'seq',
    foreignKey: 'seq'
  })
};
