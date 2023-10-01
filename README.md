server repo: https://github.com/refatbaderkhan/rentable-server

<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> A platform that connects owners and renters of basically everything that can be borrowed temporarily instead of purchasing. The goal is to save the environment, money, and space.
>

### User Stories
-As a Borrower, I want to go on rentable, so I can sit at home comfortably and search for items I can borrow temporarily without the need to buy them.
-As a Lender, I want to list my items for rent on Rentable, so I will make money out of them.
-As a Borrower, after finding a listing I’m interested in, I want to know more about it, so I will text the Lender through the built-in direct messages feature.
-As a Borrower, I don’t want to take risks, so I will check the Lender’s rating.
-As a Lender, I don’t want to take risks, so I will check the Borrowers’s rating.



<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> I designed Rentable using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Landing screen  | Profile screen |  Item screen |
| ---| ---| ---|
| ![Landing](./readme/demo/landing-wireframe.png) | ![fsdaf](./readme/demo/profile-wireframe.png) | ![fsdaf](./readme/demo/item-wireframe.png) |

### Mockups
| Landing screen  | Profile Screen | Item Screen |
| ---| ---| ---|
| ![Landing](./readme/demo/landing-mockup.png) | ![fsdaf](./readme/demo/profile-mockup.png) | ![fsdaf](./readme/demo/item-mockup.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, I implemented the Rentable website with the following features:

### User Screens (Web)
| Landing screen  | Search screen |  Profile screen |
| ---| ---| ---|
| ![Landing](./readme/demo/landing-screen.png) | ![fsdaf](./readme/demo/search-screen.png) | ![fsdaf](./readme/demo/profile-screen.png) |
| Register screen  | Chat Screen | Login Screen |
| ![Landing](./readme/demo/register-screen.png) | ![fsdaf](./readme/demo/chat-screen.png) | ![fsdaf](./readme/demo/login-screen.png) |

### Admin Screens (Web)
| Admindashboard screen  |
| ---|
| ![Landing](./readme/demo/admin-screen.png) |
<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

###  Rentable is built using the following technologies:

- React: Rentable's front-end is built using ReactJS, a popular JavaScript library for building user interfaces. This choice ensures a highly responsive and interactive interface that caters to a modern web audience.
- Redux: To manage the application's state efficiently, Redux is integrated into Rentable. enabling real-time updates and a smooth flow of data throughout the application.
- Node.js:  The server-side runtime environment of Rentable is Node.js, which enables asynchronous operations and provides a fast and scalable foundation for the application's core functionality.
- Express: Rentable's back-end is powered by Express, a minimalist Node.js web application framework. Express simplifies the creation of RESTful APIs and handles server-side logic, ensuring secure and efficient data transmission.
- MongoDB: For data storage, Rentable relies on MongoDB, a NoSQL database known for its scalability and flexibility. MongoDB allows for efficient data retrieval and storage of property listings, user profiles, and more.
- Socket.io: Real-time communication and updates are facilitated through Socket.io, a library for enabling bidirectional, event-basedcommunication between the server and clients. This was used to implement the live chat feature in the website.


<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up Rentable locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

Now, you should be able to run Coffee Express locally and explore its features.
