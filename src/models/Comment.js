module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      authorId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      body: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: true,
    },
  );
  Comment.associate = (models) => {
    // associations can be defined here
    Comment.belongsTo(models.Post, { foreignKey: 'postId' });
  };
  return Comment;
};
