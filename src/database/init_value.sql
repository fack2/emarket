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
        ('JnIDi Hummus', 2, 2.0, 1, 'JnIDi HummusJnIDi HummusJnIDi Hummus', 'https://5.top4top.net/p_1341prcxa2.png')
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
