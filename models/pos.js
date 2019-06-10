/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var pos = sequelize.define('pos', {
    position: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'name'
      }
    }
  }, {
    tableName: 'pos'
  });

  pos.associate = (models) =>{
    pos.belongsTo(models.user, {
      as: 'user',
      foreignKey: 'name'
    })
  }
  return pos;
};
