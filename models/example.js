module.exports = function(sequelize, DataTypes) {
  var MedSightData = sequelize.define("MedSightData", {
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
      allowNull: false,
      defaultValue: "none"
    },
    PainLocationSkeletal: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "none"
    },
    PainLocationEpidermis: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "none"
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
    AutoLocation: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Seattle, WA"
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
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    TimeStamp: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Sat Jan 1 1983 00:00:00 GMT-0000'
    },
    AirQualityIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    PollenIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });
  return MedSightData;
};
