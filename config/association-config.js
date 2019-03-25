'use strict';

module.exports = {
    initAssociations: (db)=>{
        db.user.hasMany(db.dataset, {
            foreignKey: 'seq',
            onDelete: 'cascade'
        });

        db.dataset.belongsTo(db.center);
        db.dataset.belongsTo(db.left1);
        db.dataset.belongsTo(db.left2);
        db.dataset.belongsTo(db.left3);
        db.dataset.belongsTo(db.right1);
        db.dataset.belongsTo(db.right2);
        db.dataset.belongsTo(db.right3);
    }
}