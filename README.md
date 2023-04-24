![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# E-Commerce-Back-End
This application is the back-end code* for an e-commerce site. This app also includes working ```Express.js API``` to use ```Sequelize``` to interact with a ```MySQL``` database. *Note: starter code provided.

## Table of Contents
- [User Story](#user-story)
- [Installation and Usage](#installation-and-usage)
- [npm packages](#npm-packages)
- [Demo](#demo)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
- [Credits](#credits)

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Installation and Usage

1. Clone this repository to your local computer.
2. Open the repo in ```VS Code```.
3. Open the server.js file in the Integrated Terminal.
4. Log-in to ```MySQL```.
5. **Create your own .env file:**
- Add new file called ```.env```
- Use following syntax in your ```.env``` file with your ```MySQL``` username and password instead of ```example```:
```
DB_NAME='ecommerce_db'
DB_PASSWORD='example'
DB_USER='example'
```
6. **Install all dependencies:** type the following in the command line: ```npm i```.
7. **Seed the ecommerce_db database:** type the following in the command line: ```npm run seed```.
8. **Start the Server:**  type the following in the command line: ```npm star```.
9. **Test The Endpoints**: I used ```Insomnia``` to test my endpoints.
- You can download ```Insomnia``` for free on your local computer [here](https://insomnia.rest/pricing).
- You may read the documentation for ```Insomnia``` [here](https://docs.insomnia.rest/insomnia/get-started).

## npm packages
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Demo

Click to watch the [demo on YouTube]().

## Contributing

To contribute to this project, you may create a git fork.

## Questions

If you have any questions or concerns, you may reach me at ***vmcnorrill@gmail.com***.

To view my other projects, you may visit my Git Hub profile: [victoriamcn](https://github.com/victoriamcn).


## License

This project is licensed under MIT.
- [Click](https://pitt.libguides.com/openlicensing/MIT#:~:text=Users%20of%20software%20using%20an,and%20the%20X%20Windows%20System.) here to view the license documentation or,
- Go to the [license file](https://github.com/victoriamcn/E-Commerce-Back-End/blob/main/LICENSE) in this repository.

## Credits

### Georgia Tech Staff
- My instructor, [Saurav Khatiwada](https://github.com/khatiwadasaurav).
- My tutors: Andres Jimenez and Byron Brown.

### Example Code
- BennAsabir on GitHub [e-commerce-backend/routes/api/product-routes.js](https://github.com/BennAsabir/e-commerce-backend/blob/main/routes/api/product-routes.js)
- wyork on GitHub: [will-ecom/models/](https://github.com/wyork63/will-ecom/tree/main/models)

### Tutorials
- educative: [What is sequelize.js?](https://www.educative.io/answers/what-is-sequelizejs)
- freecodecamp: [What is an ORM – The Meaning of Object Relational Mapping Database Tools](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/#:~:text=Object%20Relational%20Mapping%20(ORM)%20is,(OOP)%20to%20relational%20databases.)
- Insomnia Documention: [How to use Insomnia to Test API Endpoints](https://dev.to/kmcknight91/how-to-use-insomnia-to-test-api-endpoints-1lad)
- Insomnia Documention:  [Send Your First Request](https://docs.insomnia.rest/insomnia/send-your-first-request#api-request-basics)
- Medium: [ORM: Rethinking Data as Objects](https://blog.yellowant.com/orm-rethinking-data-as-objects-8ddaa43b1410)
- Sequelize Documentation: [Associations](https://sequelize.org/v3/docs/associations/#one-to-many-associations)
- Sequelize Documentation: [Class Model](https://sequelize.org/v3/api/model/)
- Sequelize Documentation: [Model Querying - Basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
- Stack Overflow: [Accessing non-existent property 'padLevels' of module exports inside circular dependency](https://stackoverflow.com/questions/64713565/accessing-non-existent-property-padlevels-of-module-exports-inside-circular-de)
- Stack Overflow: [Cannot delete or update a parent row: a foreign key constraint fails](https://stackoverflow.com/questions/1905470/cannot-delete-or-update-a-parent-row-a-foreign-key-constraint-fails)
- Stack Overflow: [Can't drop table: A foreign key constraint fails](https://stackoverflow.com/questions/11100911/cant-drop-table-a-foreign-key-constraint-fails)
- Stack Overflow: [How to use Sequelize belongsToMany associations?](https://stackoverflow.com/questions/29680359/how-to-use-sequelize-belongstomany-associations)
- Stack Overflow:  [Sequelize.js onDelete: 'cascade' is not deleting records sequelize](https://stackoverflow.com/questions/23128816/sequelize-js-ondelete-cascade-is-not-deleting-records-sequelize)
- test []()
- test []()
- The Server Side: [object-relational mapping (ORM)](https://www.theserverside.com/definition/object-relational-mapping-ORM)
- YouTube: [Learn Sequelize ORM on Node.js with MySQL From Scratch in One Video by CoderOne](https://www.youtube.com/watch?v=pxo7L5nd1gA)