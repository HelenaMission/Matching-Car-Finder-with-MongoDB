# Enhancing API with MongoDB Integration

<div align="center">

The project has been completed by 

[![GitHub - Helena Lee](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HelenaMission) [![GitHub - Jan Vincent Villanueva](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jvvillanueva9104)

Helena Lee | Jan Vincent Villanueva

</div>

<br />


## Tech Stack

**Client** 
> ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

**Server**
> ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 

**DataBase** 
> ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

**API**
> ![Microshoft Azure](https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)
* DUE TO AZURE SUBSCRIPTION ISSUE, SOME FUNCTION MAY NOT WORK AS EXPECTED.

<br />

## Project Objective

The project objective was to enhance the existing API by integrating MongoDB, allowing us to create, manage, and retrieve data from a local MongoDB database using a command-line interface (CLI) tool.

<br />

## Demo

<div align="center">

https://github.com/HelenaMission/Matching-Car-Finder-with-MongoDB/assets/132238788/73c5c3db-0eaa-465e-ad73-99e327ac0cba

</div>

<br />

## Completed Tasks

### Task 1: Seeded Cars Data into MongoDB

- Developed a CLI tool in Node.js to seed data into the local MongoDB database and provided the capability to delete data from it.
- Ensured that the CLI tool was source-controlled and included the seed data, enabling team members to seed data by cloning the repository.
  
<br/>

<img width="1421" alt="Screenshot 2023-10-03 at 11 13 47 AM" src="https://github.com/HelenaMission/Matching-Car-Finder-with-MongoDB/assets/132238788/87e6f049-9bf0-43c7-a8ad-cc15950d79de">

<br/>

### Task 2: Displayed Similar Cars from Your Stock

- Modified the existing car-finder API to retrieve cars matching specified search criteria from the MongoDB instance.
- Optionally created a frontend page that allowed users to upload cars and view matched cars.
- 
<br/>

## Getting Started

To get started with this enhanced API with MongoDB integration, follow these steps:

1. Clone this repository to your local development environment.
```sh
git clone
```

2. Install MongoDB and MongoDB Compass locally using the provided installation guides.

3. Use the developed CLI tool to seed data into the local MongoDB database.
```sh
npm run build
```

```sh
npm i -g
```

* To seed data

```sh
mongocli2 seed
```

* To delete data
```sh
mongocli2 delete
```
* To find data
```sh
mongocli2 find
```

4. Open backend folder in terminal and run dev
```sh
npm run dev
```

5. Open frontend folder in terminal and run start script
```sh
npm start
```




