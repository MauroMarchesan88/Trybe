const Books = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return Books;
};

module.exports = Books;