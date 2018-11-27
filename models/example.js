module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("CardData", {
    AllergyTriggerDairy: DataTypes.BOOLEAN,
    AllergyTriggerEggs: DataTypes.BOOLEAN,
    AllergyTriggerFish: DataTypes.BOOLEAN,
    AllergyTriggerSoy: DataTypes.BOOLEAN,
    AllergyTriggerSweets: DataTypes.BOOLEAN,
    AllergyTriggerNuts: DataTypes.BOOLEAN,
    AllergyTriggerWheat: DataTypes.BOOLEAN,
    PainLocationMuscular: DataTypes.STRING,
    PainLocationSkeletal: DataTypes.STRING,
    PainLocationEpidermis: DataTypes.STRING,
    SliderStressSlider: DataTypes.DECIMAL,
    SymptomIntensitySlider: DataTypes.DECIMAL,
    Location: DataTypes.STRING,
    Humidity: DataTypes.DECIMAL,
    Pollen: DataTypes.STRING,
    Pollution: DataTypes.STRING,
    TimeStamp: DataTypes.STRING
  });
  return Example;
};
