BEGIN;
DROP TABLE IF EXISTS flower CASCADE;

CREATE TABLE flower (
  id            serial        PRIMARY KEY,
  name    varchar(100)  NOT NULL,
  arabicname  VARCHAR(100) NOT NULL , 
  descrirtion  text  NOT NULL,
  img text Not Null
);
);


INSERT INTO flower (name,arabicname,img,descrirtion) VALUES ('Sunflower','دوار الشمس','https://cdn.sabq.org/uploads/media-cache/resize_800_relative/uploads/material-file/57af2905815736b09540190f/57af2900a9691.jpg','Sunflowers in the bud stage exhibit heliotropism (the diurnal motion of plant parts (flowers or leaves) in response to the direction of the sun). At sunrise, the faces of most sunflowers are turned towards the east. Over the course of the day, they follow the sun from east to west, while at night they return to an eastward orientation.
'), 

('Madonna Lily','السوسن الأبيض','https://ae01.alicdn.com/kf/HTB1RX8sIFXXXXb6XXXXq6xXFXXXJ/-.jpg','The true lilies are erect perennial plants with leafy stems, scaly bulbs, usually narrow leaves, and solitary or clustered flowers. The flowers consist of six petallike segments, which may form the shape of a trumpet, with a more or less elongated tube.
'),

('Anemone coronaria','شقائق النعمان','https://image.shutterstock.com/image-photo/sunny-poopy-field-surrounded-hills-260nw-536762971.jpg','Anemone coronaria is a herbaceous perennial tuberous plant growing to 20–40 cm tall, rarely to 60 cm (0.75–1.50 feet), spreading to 15–23 cm (0.50 to 0.75 feet), with a basal rosette of a few leaves, the leaves with three leaflets, each leaflet deeply lobed. The flowers which bloom from April to June are borne singly on a tall stem with a whorl of small leaves just below the flower; the flower is 3–8 cm diameter, with 5–8 red (but may be white or blue) showy petal-like tepals and a black centre. The pollen is dry, has an unsculpted exine, is less than 40 nm in diameter, and is usually deposited within 1.5 m of its source.'),

('daisy','الاقحوان','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lMKH5V2w0L19heLxIJ5UKg80V2ngyOc0hlqhzzAREh40p10W','A Daisy flower is composed of white petals and a yellow center, although the flower can sometimes have a pink or rose color.');





COMMIT;