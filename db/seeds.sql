USE carddata;
SET SQL_MODE = '';

INSERT INTO MedSightData (AllergyTriggerDairy, AllergyTriggerEggs, AllergyTriggerFish, AllergyTriggerSoy, AllergyTriggerSweets, AllergyTriggerNuts, AllergyTriggerWheat, PainLocationMuscular, PainLocationSkeletal, PainLocationEpidermis, SliderStressSlider, SymptomIntensitySlider, LocationLat, LocationLong, Humidity, Pollen, Pollution, TimeStamp)
VALUES (TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, TRUE, NULL , NULL, "Ankle", 7, 3, 47.620148199999996, -122.32988679999998, 24.3, 'HIGH', 'HIGH', 'Tue Nov 27 2018 12:13:26 GMT-0800'), (FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, 47.620148199999996, -122.32988679999998, 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');

SELECT * FROM MedSightData;