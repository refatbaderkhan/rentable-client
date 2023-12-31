<img src="./readme/title1.svg"/>

<br><br>

<!-- Table of contents -->
<img src="./readme/title10.svg"/>

- [Project Philosophy](#project-philosophy)
- [Prototyping](#Prototyping)
- [Implementation](#Implementation)
- [Tech Stack](#Tech-Stack)
- [Server Repo](#Server)
- [Demo](#Demo)
- [Performance](#Performance)
- [How to Run](#how-to)



<br><br>



<!-- project philosophy -->
<img src="./readme/title2.svg"/>
<a name="project-philosophy"></a>

> A platform that connects owners and renters of basically everything that can be borrowed temporarily instead of purchasing. The goal is to save the environment, money, and space.




### User Stories
Admin user:<br>
-As an Admin, I want to add a new subcategory to a category in the database, so I will go to the admin dashboard<br>
-As an Admin, I want to remove an area from a location, so I will go to the admin dashboard<br>
<br>
Borrower user:<br>
-As a Borrower, I want to go on rentable, so I can sit at home comfortably and search for items I can borrow temporarily without the need to buy them.<br>
-As a Borrower, after finding a listing I’m interested in, I want to know more about it, so I will text the Lender through the built-in direct messages feature.<br>
-As a Borrower, I don’t want to take risks, so I will check the Lender’s rating.<br>
<br>
Lender user:<br>
-As a Lender, I want to list my items for rent on Rentable, so I will make money out of them.<br>
-As a Lender, I don’t want to take risks, so I will check the borrower’s rating.<br>



<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>
<a name="Prototyping"></a>

> I designed Rentable using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| landing screen  | profile screen |  item screen |
| ---| ---| ---|
| ![Landing](./readme/demo/landing-wireframe.png) | ![fsdaf](./readme/demo/profile-wireframe.png) | ![fsdaf](./readme/demo/item-wireframe.png) |

### Mockups
| landing screen  | profile screen | item screen |
| ---| ---| ---|
| ![Landing](./readme/demo/landing-mockup.png) | ![fsdaf](./readme/demo/profile-mockup.png) | ![fsdaf](./readme/demo/item-mockup.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>
<a name="Implementation"></a>

> Using the wireframes and mockups as a guide, I implemented the Rentable website with the following features:

### User Screens (Web)
| landing screen  | search screen |  profile screen |
| ---| ---| ---|
| ![Landing](./readme/demo/landing-screen.png) | ![fsdaf](./readme/demo/search-screen.png) | ![fsdaf](./readme/demo/profile-screen.png) |
| Register screen  | Chat Screen | Login Screen |
| ![Landing](./readme/demo/register-screen.png) | ![fsdaf](./readme/demo/chat-screen.png) | ![fsdaf](./readme/demo/login-screen.png) |

### Admin Screens (Web)
| admin dashboard screen  |
| ---|
| ![Landing](./readme/demo/admin-screen.png) |

<br><br>




<!-- Tech stack -->
<img src="./readme/title5.svg"/>
<a name="Tech-Stack"></a>

###  Rentable is built using the following technologies:

- [React](https://reactjs.org/): Rentable's front-end is built using ReactJS, a popular JavaScript library for building user interfaces. This choice ensures a highly responsive and interactive interface that caters to a modern web audience.
- [Redux](https://redux.js.org/): To manage the application's state efficiently, Redux is integrated into Rentable, enabling real-time updates and a smooth flow of data throughout the application.
- [Node.js](https://nodejs.org/): The server-side runtime environment of Rentable is Node.js, which enables asynchronous operations and provides a fast and scalable foundation for the application's core functionality.
- [Express](https://expressjs.com/): Rentable's back-end is powered by Express, a minimalist Node.js web application framework. Express simplifies the creation of RESTful APIs and handles server-side logic, ensuring secure and efficient data transmission.
- [MongoDB](https://www.mongodb.com/): For data storage, Rentable relies on MongoDB, a NoSQL database known for its scalability and flexibility. MongoDB allows for efficient data retrieval and storage of property listings, user profiles, and more.
- [Socket.io](https://socket.io/): Real-time communication and updates are facilitated through Socket.io, a library for enabling bidirectional, event-based communication between the server and clients. This was used to implement the live chat feature in the website.


<br><br>

<!-- Server -->
<img src="./readme/title8.svg"/>
<a name="Server"></a>
> server repo: https://github.com/refatbaderkhan/rentable-server

<br><br>


<!-- Demo -->
<img src="./readme/title7.svg"/>
<a name="Demo"></a>


<div align="center">

| landing screen  |
| ---|
| ![Landing](./readme/demo/landing.gif) |

| admin login screen  |
| ---|
| ![fsdaf](./readme/demo/admin-login.gif) |

| admin dashboard screen  |
| ---|
| ![Landing](./readme/demo/admin-dashboard.gif) |

| user login screen  |
| ---|
| ![Landing](./readme/demo/user-login.gif) |

| add item screen  |
| ---|
| ![Landing](./readme/demo/list-item.gif) |

| item screen  |
| ---|
| ![Landing](./readme/demo/item-page.gif) |

| profile screen  |
| ---|
| ![Landing](./readme/demo/user-profile.gif) |

| live chat screen  |
| ---|
| ![Landing](./readme/demo/live-chat.gif) |
</div>

<br><br>

<!-- Performance -->
<img src="./readme/title9.svg"/>
<a name="Performance"></a>

> The following tests were done using  Postman to assess the functionality of my application's primary APIs
<br>

URL: http://34.241.32.106:80/items
```sh 
PASS: Response time is within acceptable range //161 ms
PASS: Response content type is JSON
PASS: Response schema is valid
```
<br>

URL: http://34.241.32.106:80/account
```sh 
PASS: Response time is within acceptable range //170 ms
PASS: Response content type is JSON
PASS: Response schema is valid
```
<br>

URL: http://34.241.32.106:80/cities
```sh 
PASS: Response time is within acceptable range //161 ms
PASS: Response content type is JSON
PASS: Response schema is valid
```
<br><br>


<!-- How to run -->
<img src="./readme/title6.svg"/>
<a name="how-to"></a>

> To set up Rentable locally, follow these steps:

### Prerequisites

Make sure to download the latest npm version on your machine.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the server repo
   ```sh
   git clone https://github.com/refatbaderkhan/rentable-server
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the server
   ```sh
   "/server-directory>" npm run dev
   ```
4. Clone the client repo
   ```sh
   git clone https://github.com/refatbaderkhan/rentable-server
   ```
5. Install NPM packages
   ```sh
   npm install
   ```
6. Run the the application
   ```sh
   "/client-directory>" npm start
   ```

Now, you should be able to run Rentable localy and access it's features using your web browser.
