'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trainings_attended extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trainings_attended.init({
    membership_form_id: DataTypes.BIGINT,
    certificate_no: DataTypes.STRING,
    service: DataTypes.STRING,
    training_attended: DataTypes.STRING,
    place: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'trainings_attended',
  });
  return trainings_attended;
};