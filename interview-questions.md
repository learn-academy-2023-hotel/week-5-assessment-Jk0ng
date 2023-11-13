# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does it mean to implement a TDD workflow?

Your answer: TDD workflow means the programmer would write out a test first before writing out the code that will make the test pass. Until the test is run and and good failure shows up as expected, the programmer will then write just the test needed to pass the test. 

Researched answer: TDD is a philosophy for developers that requires the programmers to write the test first, seeing them fail as expected, and then creating a code that makes the test pass. The inplementation of the test driven development is called red-green-refactor. Red means the test will fail in an expected way(the method is undefined in the terminal); green mean the test will pass once just enough code are written to make satisfy the test. Refactor means the code is then cleaned up to be more concise and readable without changing the behavior. THe key idea is to build up the code in an incremental manner to add new features or make changes. TDD is beneficial because it allows programmers to think abotu the expected behavior of the code and catch defects early. 

2. What is a relational database? Are there other kinds of databases?

Your answer: don't remember exactly... Perhaps they are something like rows and columns in an Excel sheet. 

Researched answer: relational database is information stored in a spreadsheet with rows and columns. Rows in database are different entries that is associated with a unique primary key; each row is a unique instance in the database. Columns in database are the characteristic that define the data. 

3. Why is an ORM?

Your answer: ORM is object-relation-model WRONG

Researched answer: ORM stands for object-relational-mapping; ORM is the programming technique that bridges the gap between an object-oriented programming language like Ruby and a language used for database like Postgresql together. ORM essentially serves as a translator between two different languages by using the commonality that both Postgresql and Ruby have an object-oriented approach.

4. STRETCH: What is the difference between inheritance in JavaScript and inheritance in Ruby?

Researched answer: JavcScript uses prototype-based inheritance. Every function in JavaScript has a prototype property, so objects created with a function can as a constructor inherit the properties and methods from that prototype. Ruby uses class-based inheritance because everything in Ruby is object, and objects are instances of classes. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations:model validation is the process that ensures the data are clea and valid before they are saved into the database. Model validation will check for error, and if errors exist, the data will not be put into the database. 

2. Params: Params moniter what information gets passed into database. Strong params set restrictions on the controller method to determine waht attributes get to be created and updated. The require method makes a requirement for the data to have the specific data to be passed in. The permit method allow certain items to pass if they are present, but not the data with attributes not listed in the strong params. 

3. API: Application Programming Interface is the building block to transmit data between different software applications using JSON. It allows the users to retrieve their user information, create new accounts, update their account information and delete accounts. 
