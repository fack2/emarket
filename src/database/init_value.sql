BEGIN;

    INSERT INTO "user"
        (name, email,password,phone,address)
    VALUES
        ('yousef qwasmeh', '151037@ppu.edu.ps', '0', '0599000000', 'my address'),
        ('munir', '121050@ppu.edu.ps', '123456', '0599111111', 'my address'),
        ('somaya', 'fdsas@hjbsa.com', '1234', '0599222222', 'my address');

    INSERT INTO "category"
        (name,ID,img)
    VALUES
        ('Dairy', 1, 'https://6.top4top.net/p_13397td882.png'),
        ('Meat', 2, 'https://2.top4top.net/p_1339hsupe9.png'),
        ('Beverages', 3, 'https://5.top4top.net/p_1339ksl501.png')
    ;

    INSERT INTO "category"
        (name,ID,img)
    VALUES
        ('Bread-Bakery', 4, 'https://6.top4top.net/p_13391ja9q7.png'),
        ('Canned-Jarred Goods ', 5, 'https://1.top4top.net/p_1339vfmak8.png'),
        ('Dry-Baking Goods', 6, 'https://4.top4top.net/p_1339qa2c85.png'),
        ('Frozen Foods', 7, 'https://5.top4top.net/p_133959vdn6.png'),
        ('Produce', 8, 'https://3.top4top.net/p_1339hbgth10.png'),
        ('Cleaners', 9, 'https://2.top4top.net/p_1339ow3ed3.png'),
        ('Paper Goods', 10, 'https://3.top4top.net/p_1339m62zd4.png'),
        ('Personal Care', 11, 'https://6.top4top.net/p_1339mb4zh1.png'),
        ('Pampers', 12, 'https://1.top4top.net/p_13399te1w2.png')
    ;

    INSERT INTO "product"
        (name,ID,price,categoryID,description,img)
    VALUES
        ('LIDdells Milk', 1, 8.0, 1, 'Cow is milk has long been consumed for its health benefits.Among the many valuable nutrients is calcium, which can prevent osteoporosis.', 'https://4.top4top.net/p_1341q53by1.png'),
        ('JnIDi Hummus', 2, 2.0, 1, 'JnIDi HummusJnIDi HummusJnIDi Hummus', 'https://5.top4top.net/p_1341prcxa2.png'),('Meat',3,24.0,2,'
Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times','https://2.top4top.net/p_1350gqf661.jpeg'),('Coca cola',4,6.0,3,'Coca-Cola, or Coke, is a carbonated soft drink[1] manufactured by The Coca-Cola Company. Originally intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton and was bought out by businessman Asa Griggs Candler,','https://6.top4top.net/p_1350c54bp1.jpg'),('Bread',5,5.0,4,'Bread is usually made from a wheat-flour dough that is cultured with yeast, allowed to rise, and finally baked in an oven.
','https://3.top4top.net/p_1350kt55m1.jpeg'),('Corn canned',6,3.0,5,'Canned Corn kernel is kernel corn, with water. Sugar and salt may be added. ... White (smaller sweeter) and yellow (bigger, more flavor) kerneled corn are the most popular eating varieties and are readily available across stores','https://3.top4top.net/p_1350wq2351.png'),('Flour',7,85.0,6,'Flour is a powder made by grinding raw grains, roots, beans, nuts, or seeds. It is used to make many different foods. Cereal flour is the main ingredient of bread, which is a staple food for most cultures.
','https://3.top4top.net/p_1350b5khb1.jpg'),('Frozen food packaging',8,20.0,7,'Flexible packaging continues to represent the fastest growing product type in the frozen foods industry. Kendall can assist by developing custom-made solutions for frozen food packaging ','https://1.top4top.net/p_1350hz4nz1.jpg'),('Tomato',9,15.0,8,'The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America','https://3.top4top.net/p_1350ry0d01.jpg'),('Dettol',10,12.0,9,'
Use Dettol Antiseptic Liquid on cuts, scratches and insect bites to kill germs and protect against infection. Dettol Liquid. For cuts, bites, abrasions and insect stings, dandruff, spots and pimples. Contains Chloroxylenol.','https://6.top4top.net/p_1350c077x1.jpg'),('Fine',11,4.0,10,'','https://6.top4top.net/p_13504rqc01.jpg'),

('Dove',12,12.0,11,' The Dove is a group of small birds related to pidgeons. They come in wildly different colors around the world','https://2.top4top.net/p_1350xuikh1.jpeg'),('Pampers',13,10.0,12,'Pampers is an American brand of baby and toddler products marketed by Procter & Gamble','https://1.top4top.net/p_1350j214g1.jpeg')
    ;

    INSERT INTO "order"
        (ID,address,name,phone, note, userID, isPaid)
    VALUES
        (1, 'address1', 'yousef', '0599999999', 'a kdaf hsduyf ghaweb fasd', 1, false),
        (2, 'address2', 'munir', '0599999999', 'b ;fidah jsdhf iawh', 2, false),
        (3, 'address3', 'yousef', '0599999999', 'c iwer hwepiu hfkjkdl a', 1, true)
    ;

    INSERT INTO "orderItem"
        (orderID,quantity,productID,total)
    VALUES
        (3, 2, 1, 16.0),
        (1, 2, 1, 16.0),
        (1, 2, 2, 4.0)
    ;

    COMMIT;
