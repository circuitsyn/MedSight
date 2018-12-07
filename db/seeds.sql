USE carddata;
SET SQL_MODE = '';

INSERT INTO MedSightData (AllergyTriggerDairy, AllergyTriggerEggs, AllergyTriggerFish, AllergyTriggerSoy, AllergyTriggerSweets, AllergyTriggerNuts, AllergyTriggerWheat, PainLocationMuscular, PainLocationSkeletal, PainLocationEpidermis, SliderStressSlider, SymptomIntensitySlider, AutoLocation, Humidity, Pollen, Pollution, TimeStamp, AirQualityIndex, PollenIndex)
VALUES 
(TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, TRUE, NULL , NULL, "Ankle", 7, 3, "Tacoma, WA", 24, 'HIGH', 'HIGH', 'Tue Nov 27 2018 12:13:26 GMT-0800', 5, 2),
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf", NULL, "Back", 3, 2, "Seattle, WA", 27, 'HIGH', 'LOW', 'Wed Nov 28 2018 11:17:26 GMT-0800', 4, 1),
(TRUE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, NULL, NULL, "Hands", 7, 7, "Seattle, WA", 60, 'HIGH', 'LOW', 'Wed Nov 28 2018 01:01:26 GMT-0800', 4, 0),
(TRUE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, NULL, NULL, "Hands", 8, 10, "Seattle, WA", 80, 'HIGH', 'LOW', 'Thu Nov 29 2018 11:13:26 GMT-0800', 3, 0),
(TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, NULL, NULL, "Hands", 6, 9, "Seattle, WA", 80, 'HIGH', 'LOW', 'Fri Nov 30 2018 11:19:26 GMT-0800', 4, 1),
(TRUE, FALSE, FALSE, TRUE, TRUE, FALSE, TRUE, "Elbow" , NULL, "Hands", 8, 7, "Seattle, WA", 85, 'HIGH', 'LOW', 'Fri Nov 30 2018 02:13:26 GMT-0800', 6, 1),
(TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, "Elbow" , NULL, "Hands", 9, 8, "Seattle, WA", 75, 'HIGH', 'LOW', 'Sat Dec 01 2018 11:15:26 GMT-0800', 6, 2),
(TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, TRUE, "Elbow" , NULL, "Hands", 9, 7, "Seattle, WA", 60, 'HIGH', 'LOW', 'Sun Dec 02 2018 11:14:26 GMT-0800', 5, 0),
(TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, "Elbow" , NULL, "Hands", 8, 6, "Seattle, WA", 83, 'HIGH', 'LOW', 'Mon Dec 03 2018 20:17:26 GMT-0800', 5, 0),
(TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, "Elbow" , NULL, "Hands", 9, 8, "Seattle, WA", 65, 'HIGH', 'LOW', 'Mon Dec 03 2018 07:13:26 GMT-0800', 4, 1),
(TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, "Elbow" , NULL, "Hands", 10, 8, "Seattle, WA", 70, 'HIGH', 'LOW', 'Tue Dec 04 2018 10:13:26 GMT-0800', 5, 2),
(FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, NULL, "Ankle", NULL, 9, 0, "Seattle, WA", 60, 'HIGH', 'LOW', 'Wed Dec 05 2018 06:13:26 GMT-0800', 1, 6),
(FALSE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, NULL, "Ankle", NULL, 7, 1, "Seattle, WA", 65, 'HIGH', 'LOW', 'Wed Dec 05 2018 20:13:26 GMT-0800', 2, 5),
(FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, NULL, "Ankle", NULL, 6, 3, "Seattle, WA", 70, 'HIGH', 'LOW', 'Thu Dec 06 2018 22:13:26 GMT-0800', 1, 4),
(FALSE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, NULL, "Ankle", NULL, 9, 2, "Seattle, WA", 64, 'HIGH', 'LOW', 'Fri Dec 07 2018 21:13:26 GMT-0800', 2, 5),
(FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, NULL, "Ankle", NULL, 8, 1, "Seattle, WA", 77, 'HIGH', 'LOW', 'Fri Dec 07 2018 20:17:26 GMT-0800', 2, 5),
(FALSE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, NULL, "Ankle", NULL, 8, 1, "Seattle, WA", 90, 'HIGH', 'LOW', 'Sat Dec 08 2018 20:11:26 GMT-0800', 1, 5),
(TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, NULL, "Ankle", NULL, 7, 0, "Seattle, WA", 82, 'HIGH', 'LOW', 'Sat Dec 08 2018 23:13:26 GMT-0800', 1, 6),
(FALSE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, NULL, "Ankle", NULL, 9, 0, "Seattle, WA", 83, 'HIGH', 'LOW', 'Sat Dec 08 2018 23:17:26 GMT-0800', 2, 6),
(FALSE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, NULL, "Ankle", NULL, 7, 2, "Seattle, WA", 84, 'HIGH', 'LOW', 'Sun Dec 09 2018 21:13:26 GMT-0800', 1, 4),
(TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, NULL, "Ankle", NULL, 9, 1, "Seattle, WA", 80, 'HIGH', 'LOW', 'Mon Dec 10 2018 20:13:26 GMT-0800', 0, 4),
(FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, TRUE, NULL, "Ankle", NULL, 10, 2, "Seattle, WA", 60, 'HIGH', 'LOW', 'Tue Dec 11 2018 21:15:26 GMT-0800', 0, 6);

SELECT * FROM MedSightData;