USE carddata;
SET SQL_MODE = '';

INSERT INTO MedSightData (AllergyTriggerDairy, AllergyTriggerEggs, AllergyTriggerFish, AllergyTriggerSoy, AllergyTriggerSweets, AllergyTriggerNuts, AllergyTriggerWheat, PainLocationMuscular, PainLocationSkeletal, PainLocationEpidermis, SliderStressSlider, SymptomIntensitySlider, AutoLocation, Humidity, Pollen, Pollution, TimeStamp)
VALUES 
(TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, TRUE, NULL , NULL, "Ankle", 7, 3, "Tacoma, WA", 24, 'HIGH', 'HIGH', 'Tue Nov 27 2018 12:13:26 GMT-0800'),
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf", NULL, "Back", 3, 2, "Seattle, WA", 27, 'HIGH', 'LOW', 'Wed Nov 28 2018 11:13:26 GMT-0800');
(TRUE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, NULL, NULL, "Hands", 7, 7, "Seattle, WA", 60, 'HIGH', 'LOW', 'Wed Nov 28 2018 11:13:26 GMT-0800');
(TRUE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, NULL, NULL, "Hands", 8, 10, "Seattle, WA", 80, 'HIGH', 'LOW', 'Thu Nov 29 2018 11:13:26 GMT-0800');
(TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, NULL, NULL, "Hands", 6, 9, "Seattle, WA", 80, 'HIGH', 'LOW', 'Fri Nov 30 2018 11:13:26 GMT-0800');
(TRUE, FALSE, FALSE, TRUE, TRUE, FALSE, TRUE, "Elbow" , NULL, "Hands", 8, 7, "Seattle, WA", 85, 'HIGH', 'LOW', 'Fri Nov 30 2018 11:13:26 GMT-0800');
(TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, "Elbow" , NULL, "Hands", 9, 8, "Seattle, WA", 75, 'HIGH', 'LOW', 'Sat Dec 01 2018 11:13:26 GMT-0800');
(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, "Elbow" , NULL, "Hands", 9, 7, "Seattle, WA", 60, 'HIGH', 'LOW', 'Sun Dec 02 2018 11:13:26 GMT-0800');
(TRUE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Elbow" , NULL, "Hands", 8, 6, "Seattle, WA", 83, 'HIGH', 'LOW', 'Mon Dec 03 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');
(FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, "Calf" , NULL, "Back", 3, 2, "Seattle, WA", 27.4, 'HIGH', 'LOW', 'Tue Nov 28 2018 11:13:26 GMT-0800');

SELECT * FROM MedSightData;