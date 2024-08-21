# YouTube Clone Project

This project is a clone of YouTube, aiming to replicate some of its core features such as video browsing, searching, and playback. It utilizes React for the frontend, Redux for state management, and Tailwind CSS for styling. The project also includes routing using React Router, API integration for fetching video data, and responsive design for a seamless user experience across devices.


**Features:**

1. **Navigation:** The Navbar component provides navigation links for browsing different sections of the application, including the home page, search page, and video playback.

2. **Search:** Users can search for videos using the search bar in the Navbar. Typing a query and submitting the form triggers a search action, fetching relevant videos from the YouTube API and displaying them on the search results page.

3. **Video Playback:** Clicking on a video thumbnail navigates users to the video playback page, where they can watch the selected video. The video player supports basic playback controls and fullscreen mode.

4. **Infinite Scroll:** The home page and search results page implement infinite scrolling, dynamically loading more videos as the user scrolls down the page. This provides a seamless browsing experience without requiring users to navigate to separate pages.

5. **Recommended Videos:** Upon watching a video, users are presented with a list of recommended videos based on their viewing history. These recommendations are fetched from the YouTube API and displayed on the video playback page.

6. **Responsive Design:** The application is designed to be responsive, adapting to various screen sizes and devices. It utilizes Tailwind CSS for responsive styling, ensuring consistent layout and user experience across desktop and mobile devices.

## Live Demo

You can try out the live demo of the app [here](https://react-youtubeclone.onrender.com).

## Folder Structure

```
youtube-clone/
│
├── public/                 # Public assets
│   ├── index.html          # HTML template
│   └── ...
│
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── Card.js         # Component for video cards
│   │   ├── Navbar.js       # Navbar component
│   │   ├── SearchCard.js   # Component for search result cards
│   │   ├── Sidebar.js      # Sidebar component
│   │   └── Spinner.js      # Loading spinner component
│   │
│   ├── features/           # Redux slice files
│   │   └── youtubeSlice.js # Redux slice for YouTube-related actions
│   │
│   ├── pages/              # Page components
│   │   ├── Home.js         # Home page component
│   │   ├── Search.js       # Search page component
│   │   └── Watch.js        # Watch page component
│   │
│   ├── store/              # Redux store setup
│   │   ├── reducers/       # Redux reducer files
│   │   │   ├── getHomePageVideos.js    # Reducer for fetching home page videos
│   │   │   ├── getRecommendedVideos.js # Reducer for fetching recommended videos
│   │   │   ├── getSearchPageVideos.js  # Reducer for fetching search page videos
│   │   │   └── getVideoDetails.js      # Reducer for fetching video details
│   │   │
│   │   ├── store.js        # Redux store configuration
│   │   └── ...
│   │
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for React app
│   └── ...
│
├── .gitignore              # Git ignore file
├── package.json            # Node.js dependencies and scripts
├── README.md               # Project README file
└── ...


```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/React-YoutubeClone/blob/main/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/React-YoutubeClone/blob/main/Screenshots/ss2.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/React-YoutubeClone/blob/main/Screenshots/ss3.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/React-YoutubeClone/blob/main/Screenshots/ss4.png" alt="Screenshot 1" width="1000"> 

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A package that simplifies Redux logic, including actions, reducers, and store configuration.
- **Vite**: A fast build tool for modern web development, providing lightning-fast cold server start and instant hot module replacement.
- **Tailwind CSS**: A utility-first CSS framework that provides a set of pre-built classes to style your application. Tailwind CSS allows for rapid development and consistent styling.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/React-YoutubeClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to http://localhost:5173 to view the app.

## How to Use:

1. **Navigation:**
   - Upon launching the application, users are greeted with the Home page, where they can explore a curated list of videos.
   - Use the navigation bar at the top to switch between different sections of the application, such as Home, Search, and Watch.
   - Click on the YouTube logo to return to the Home page from any other section of the app.

2. **Searching for Videos:**
   - To search for specific videos, enter a keyword or phrase into the search bar located in the navigation area.
   - Press the search button or hit Enter to initiate the search.
   - The search results page will display a list of videos related to the entered search term.
   - Click on any video thumbnail or title to watch the video.

3. **Watching Videos:**
   - When watching a video, the main portion of the screen will display the video player.
   - Users can interact with the video player controls to play, pause, seek, adjust volume, and enter fullscreen mode.
   - The sidebar may contain additional information related to the video being watched, such as recommended videos or video details.

4. **Exploration Possibilities:**
   - Explore trending videos: Check out the Home page to discover trending and popular videos across different categories.
   - Search for specific content: Use the search feature to find videos on topics of interest to you.
   - Watch recommended videos: After watching a video, explore the recommended videos section to discover related content.
   - Interact with the community: Like, comment, and share videos to engage with the YouTube community.
   - Customize preferences: Use the sidebar or profile settings to customize your YouTube experience, such as language preferences, notifications, and privacy settings.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

