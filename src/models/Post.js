module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
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
      title: {
        allowNull: false,
        type: DataTypes.STRING,
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
  Post.associate = (models) => {
    // associations can be defined here
    Post.hasMany(models.Comment, { as: 'comments', foreignKey: 'postId' });
  };
  return Post;
};
