BlueWindow_TechnicalAssessment_TopBrands

author: Jordanoski Viktor

Email: viktorj560@gmail.com

Angular, Node, and MySQL stack


Navigate to backend/config/config.json and change the password to your MySQL password.

{

  "host": "localhost",

  "user": "root",

  "database": "brands",

  "password": "< password >"

}


Note: For development purposes the host is localhost but this will need to be updated if you decide to deploy the application. By Default, MySQL gives the user 'root' with all privileges. You can simply change this to another user if desired. In this application I named my database 'brands', however, if you went with a different name this will need to be changed.

Tip: When declaring the brands table in the brands schema, make the coulumn name with a UI(Unique Index), that way it will make sure that no duplicate brand is ever inserted into the table.
When declaring the brandsRatings table in the brands shcema, create a composite primary key of the columns name and country, that way every brand will have only one rating for one particular country. You can do this with the SQL QUERY PRIMARY KEY (name, country).
These tips go a long way when inserting data of the corect type in the MySql database.

How to Start the application:

cd backend

$ npm start

cd ../frontend

$ npm start

How to use the application:

It is very straightforward, table data is fetched on launch, write the name of the brand you want to add to the database along with its description, then click the + button on the right to add it to the database, or edit button on the already stored brand to change its values. To delete it, simply press the delete button next to the edit button.
For the brandRatings, it is mostly the same, only if you add a new combination of brand and country, it will be insertet into the database. If the combination already exists in the database, adding will not do anything, inserting however will change the rating for that particular combination of name and country brandRating.

Unfortunately however, i haven't been able to make the brands and countries dropdowns in the frontend to pass the value forward with NgModal, so i had to add a second form where it has to be written, it cannot be just chosen from the dropdowns and passed forward, although i am aware it is unsafe on the clients side, and i apologize for not being able to solve that problem before the deadline.
Should that be solved, therefore the extra forms for the data from the dropdown form will become redundant.

Other than that, form field inputs are reactive in a way that they will not allow any insertion,editing or deletion that isn't allowed by the Technical Assesment instructions.

Disclaimer: I chose this front end display of data not by any means because it looks the best or because i cannot make it look better if needs be,  only because this way it was easiest for me to test the functionalities of the application. In other words, the frontend look is by no means final, and can be changed or replaced altogether.