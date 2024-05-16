<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> An immersive social media website that is focused on user interaction and community engagement.
>
> Vibe is a place for immersive social experiences, focusing on genuine connections and community engagement. It offers a space for users to escape life's hardships, relax, and connect through customizable 2D avatars. We believe in creating a vibrant digital ecosystem where every interaction is valued, celebrated, and cherished.

### User Stories

- As a user, I want to create and customize my own 2D avatar on Vibe to reflect my personality and preferences. By personalizing my avatar's appearance and style, I can express myself creatively.
- As a user, I want to unwind and relax on Vibe, escaping from the stresses of daily life. Whether it's through casual chats with friends, participating in fun activities, or joining chat rooms.

### Premium User Stories

- As a Premium user, I want to have access to exclusive and advanced 2D avatar items so that I can stand out within the community.
- As a Premium user, I want to be first-in-line in customer support.

### Admin Stories

- As an admin, I want to oversee, moderate and manage the chatrooms on Vibe, to ensure that they remain active, engaging, and free from inappropriate content or behavior.
- As an admin, I want to manage users on Vibe, and ban them if they break the rules.

<br><br>

<!-- Tech stack -->
<img src="./readme/title3.svg"/>

### Vibe is built using the following technologies:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>

<!-- UI UX -->
<img src="./readme/title4.svg"/>

> We designed Vibe using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

- Project Figma design [figma](https://www.figma.com/design/F42tfEE6pkzNUUWrREZiRA/Vibe?node-id=0%3A1&t=AS2pMfyGeiuoAQkt-1)

### Mockups

| Home Screen                                   | Character Creator Screen                    | Profile Screen                                |
| --------------------------------------------- | ------------------------------------------- | --------------------------------------------- |
| ![Landing](./readme/demo/mockups/landing.png) | ![Editor](./readme/demo/mockups/editor.png) | ![Profile](./readme/demo/mockups/profile.png) |

<br><br>

<!-- Database Design -->
<img src="./readme/title5.svg"/>

### Architecting Data Excellence: Innovative Database Design Strategies:

![ER Diagram](./readme/erd.png)

<br><br>

<!-- Implementation -->
<img src="./readme/title6.svg"/>

### User Screens (Web)

| Login Screen                          | Register Screen                         | Feed Screen                                |
| ------------------------------------- | --------------------------------------- | ------------------------------------------ |
| ![Landing](./readme/demo/login.png)   | ![Register](./readme/demo/register.png) | ![Feed](./readme/demo/feed.png)            |
| Character Editor Screen               | Profile Screen                          | Chat Rooms Screen                          |
| ![Editor](./readme/demo/editor.png)   | ![Profile](./readme/demo/profile.png)   | ![Chat Rooms](./readme/demo/chatrooms.png) |
| Premium Screen                        |
| ![Premium](./readme/demo/premium.png) |

### Admin Screens (Web)

| Dashboard Screen                                | Register Screen                         | Feed Screen                     |
| ----------------------------------------------- | --------------------------------------- | ------------------------------- |
| ![Dashboard](./readme/demo/admin_dashboard.png) | ![Register](./readme/demo/register.png) | ![Feed](./readme/demo/feed.png) |

<br><br>

<!-- Prompt Engineering -->
<img src="./readme/title7.svg"/>

### Mastering AI Interaction: Unveiling the Power of Prompt Engineering:

- This project uses advanced prompt engineering techniques to optimize the interaction with natural language processing models. By skillfully crafting input instructions, we tailor the behavior of the models to achieve precise and efficient language understanding and generation for various tasks and preferences.

<br><br>

<!-- AWS Deployment -->
<img src="./readme/title8.svg"/>

### Efficient AI Deployment: Unleashing the Potential with AWS Integration:

- This project leverages AWS deployment strategies to seamlessly integrate and deploy natural language processing models. With a focus on scalability, reliability, and performance, we ensure that AI applications powered by these models deliver robust and responsive solutions for diverse use cases.

<br><br>

<!-- Unit Testing -->
<img src="./readme/title9.svg"/>

### Precision in Development: Harnessing the Power of Unit Testing:

- This project employs rigorous unit testing methodologies to ensure the reliability and accuracy of code components. By systematically evaluating individual units of the software, we guarantee a robust foundation, identifying and addressing potential issues early in the development process.

<br><br>

<!-- How to run -->
<img src="./readme/title10.svg"/>

> To set up Coffee Express locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [example](https://example.com)
2. Clone the repo
   git clone [github](https://github.com/your_username_/Project-Name.git)
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```

Now, you should be able to run Coffee Express locally and explore its features.
