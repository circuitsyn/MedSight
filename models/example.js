module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("CardData", {
    AllergyTriggerDairy: DataTypes.STRING,
    AllergyTriggerEggs: DataTypes.STRING,
    AllergyTriggerFish: DataTypes.STRING,
    AllergyTriggerSoy: DataTypes.STRING,
    AllergyTriggerSweets: DataTypes.STRING,
    AllergyTriggerNuts: DataTypes.STRING,
    AllergyTriggerWheat: DataTypes.STRING,
    PainLocationMusculur: DataTypes.STRING,
    PainLocationSkeletal: DataTypes.STRING,
    PainLocationEpidermis: DataTypes.STRING,
    SliderStressSLider: DataTypes.DECIMAL,
    SymptomIntensitySlider: DataTypes.DECIMAL,
    Location: DataTypes.STRING,
    Humidity: DataTypes.DECIMAL,
    Pollen: DataTypes.STRING,
    Pollution: DataTypes.STRING,
    TimeStamp: DataTypes.STRING
  });
  return Example;
};
