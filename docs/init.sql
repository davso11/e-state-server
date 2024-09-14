INSERT INTO `user` (`id`, `firstName`, `lastName`, `phone`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(3, 'Dorgeles', 'Konan', '0554220610', 'konan@gmail.com', '$2b$10$kBLrmobvD2XntfuEw1FPhOqhPGUL16k0TxpKncKXhAPAt3AlJobfe', '2024-09-14 01:44:52.472', '2024-09-14 01:44:52.472');

-- --------------------------------------------------------

INSERT INTO `media` (`id`, `url`, `encryption`, `type`, `size`, `propertyId`) VALUES
(1, 'https://pitchimmo.fr/medias/program/17325/images/dijon-coeur-dilot_thumb_840.jpg', NULL, NULL, NULL, 1),
(2, 'https://pitchimmo.fr/medias/program/17325/images/dijon-coeur-dilot_thumb_840.jpg', NULL, NULL, NULL, 1),
(3, 'https://pitchimmo.fr/medias/program/17325/images/dijon-rooftop_thumb_1920.jpg', NULL, NULL, NULL, 1),
(4, 'https://pitchimmo.fr/medias/program/17325/images/dijon-vue-depuis-le-canal_thumb_1920.jpg', NULL, NULL, NULL, 1),
(5, 'https://pitchimmo.fr/medias/program/17325/images/dijon-vue-depuis-le-canal_thumb_1920.jpg', NULL, NULL, NULL, 1);

-- --------------------------------------------------------

INSERT INTO `progessstate` (`id`, `currentStep`, `rate`, `createdAt`, `updatedAt`, `propertyId`) VALUES
(1, 'done', 100, '2024-09-12 03:36:16.720', '2024-09-12 03:35:31.685', 1);

-- --------------------------------------------------------

INSERT INTO `property` (`id`, `price`, `surface`, `type`, `description`, `createdAt`, `updatedAt`, `city`, `commune`, `rooms`, `street`) VALUES
(1, 7000000, 120, 'villa', 'Cette nouvelle réalisation s’implante au bord du canal de Bourgogne, au sein de l’écoquartier de l’Arsenal, actuellement en plein développement, aussi accueillant que pratique. La proximité des commerces et d’équipements scolaires et culturels, dans un rayon de 15 minutes à pied, ainsi que la bonne desserte de transports en commun, avec la ligne 2 de tramway à 4 minutes à pied et des lignes de bus à 12 minutes, en font une adresse particulièrement agréable à vivre.  Arborant une architecture contemporaine, les quatre immeubles de la résidence s’organisent autour d’un mail de verdure soigné. Du studio au 5 pièces, les appartements offrent une belle variété de surfaces et ouvrent sur un balcon, une terrasse ou, pour certains, un rooftop.', '2024-09-11 23:34:31.410', '2024-09-12 01:22:12.245', 'Abidjan', 'Cocody', 5, 'Feh Kesse');

-- --------------------------------------------------------
