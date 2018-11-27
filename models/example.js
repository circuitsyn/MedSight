module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("MedSightData", {
    AllergyTriggerDairy: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false,
      allowNull: false
    },
    AllergyTriggerEggs: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false,
      allowNull: false
    },
    AllergyTriggerFish: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false,
      allowNull: false
    },
    AllergyTriggerSoy: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false,
      allowNull: false
    },
    AllergyTriggerSweets: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false,
      allowNull: false
    },
    AllergyTriggerNuts: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false,
      allowNull: false
    },
    AllergyTriggerWheat: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false,
      allowNull: false
    },
    PainLocationMuscular: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    PainLocationSkeletal: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    PainLocationEpidermis: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    SliderStressSlider: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SymptomIntensitySlider: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LocationLat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: -62.200249199
    },
    LocationLong: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: -58.95916283
    },
    Humidity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Pollen: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    Pollution: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    TimeStamp: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Sat Jan 1 1983 00:00:00 GMT-0000'
    }
  });
  return Example;
};
