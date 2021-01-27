### Postgres

1.  Create table

        ```
        a. table writers :
        create table Writers(
            id serial primary key,
            full_name varchar not null,
            email varchar not null,
            photo varchar not null,
            createdAt timestamp default now(),
            updatedAt timestamp default now());

        ```

        b. table Books:
        create table Books(
        id serial primary key,
        writerId integer not null,
        categoryId integer not null,
        title varchar not null,
        description text,
        photo varchar not null,
        createdAt timestamp default now(),
        updatedAt timestamp default now());

        ```
        c. table Category
        create table Category(
            id serial primary key,
            category varchar not null);
        ```

        ```
        #. add relation books to writers:
             alter table books add CONSTRAINT writerId FOREIGN KEY (writerId) references writers (id);
        ```

        ```
        #. add relation books to category:
             alter table books add CONSTRAINT categoryId FOREIGN KEY (categoryId) references category (id);
        ```

2.  Insert Data

    ````
    a. Insert data writers:

    insert into writers (full_name, email, photo) values
    ('andi', 'aris@gmail.com' , 'photo_andi'),
    ('aris', 'aris@gmail.com' , 'photo_aris'),
    ('ani', 'ani@gmail.com' , 'photo_ani'),
    ('anji', 'anji@gmail.com' , 'photo_anji'),
    ('ambi', 'ambi@gmail.com' , 'photo_ami');

    ```

    ````

    b. Insert data category:

    insert into category(category) values
    ('action'),
    ('comic'),
    ('fantasy'),
    ('horror');

    ````

    ```
    c. Insert data books:

    insert into books(title, description, photo, writerId, categoryId) values
    ('buku 1', 'deskripsi 1', 'photo 1', 1, 1),
    ('buku 2', 'deskripsi 2', 'photo 2', 2, 2),
    ('buku 3', 'deskripsi 3', 'photo 3', 3, 3),
    ('buku 4', 'deskripsi 4', 'photo 4', 4, 4),
    ('buku 5', 'deskripsi 5', 'photo 5', 2, 2);
    ````

3.  Inner and Left Join

    ```
    a. Inner Join:

    SELECT writers.full_name AS Penulis,
    books.title AS Judul_Buku,
    books.description AS Deskripsi
    FROM books
    INNER JOIN writers
    ON books.writerId = writers.id;
    ```

    ```
    a. Left Join:

    SELECT writers.full_name AS Penulis,
    books.title AS Judul_Buku,
    books.description AS Deskripsi
    FROM books
    LEFT JOIN writers
    ON books.writerId = writers.id;
    ```

4.  data writers dengan category horror.

    ```
    SELECT writers.full_name AS Penulis,
    writers.email, category.category AS Kategori
    FROM writers
    INNER JOIN category
    ON writers.id = category.id
    WHERE category='horror';
    ```

5.  query join antara writers dan books group by category.

````
    SELECT array_agg(writers.full_name) AS Nama,
    array_agg(books.title) AS Judul,
    array_agg(books.description) AS Deskripsi,
    array_agg(category.category) AS Kategori
    FROM books
    INNER JOIN writers
    ON books.writerId = writers.id
    JOIN category ON books.categoryId = category.id
    GROUP BY category.category
    ORDER BY category.category;
    ```

        ```

        ```
````
