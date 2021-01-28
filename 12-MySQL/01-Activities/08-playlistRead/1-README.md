# **Instructions**

* Throughout this class we are going to be working on creating an application that takes in music data to create personalized playlists

* Make sure to get as far as you can over the course of these assignments as the coding you do here will be extremely useful to you when you begin working on the homework

* For now we will simply be creating your database in MySQL and then creating a connection to said database using Node. **Remember, you must create a database before attempting to connect to it. Doing otherwise will return an error.**

* Create a database called `playlistDB`.

* Create a `playlistRead.js` file that creates a connection to the new database.
  * _HINT: see activity `06-iceCreamWithConnection`_

* BONUS: Using MySQL Workbench, create a table called `songs` in your database with four columns...

  * Primary Key of "ID" which auto-increments
  * A column called "title"
  * A column called "artist"
  * A column called "genre"

* BONUS: Using MySQL Workbench, populate your table with a few rows of dummy data

* BONUS: Start looking into how you can use the MySQL package to read data from a MySQL database
