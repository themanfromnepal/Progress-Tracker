# Progress Tracker App

The Progress Tracker App is a simple React JS application that allows users to track the progress of activities they have added to a list. It features a drag and drop interface for managing the order of activities and utilizes the Zustand State Management Library to efficiently manage the application's state.

## Features

- Add activities to the list.
- Reorder activities using drag and drop.
- Track the progress of completed activities.
- Clear completed activities from the list.

## Technologies Used

- React JS
- Zustand State Management Library
- Drag and Drop functionality

## Getting Started

To use the Progress Tracker App, follow these steps:

1. Clone the repository to your local machine:
   git clone https://github.com/your-username/progress-tracker-app.git

2. Navigate to the project directory:

cd progress-tracker-app

3. Install the required dependencies:

npm install

4. Start the development server:

npm run dev

5. Open your web browser and visit [http://localhost:5173](http://localhost:5173) to use the app.

## Usage

1. Add Activity:

- To add a new activity to the list, enter the activity name in the input field and click the "Add" button.

2. Reorder Activities:

- To change the order of activities, simply click and drag an activity to the desired position within the list.

3. Mark Activity as Completed:

- Click on the checkbox next to an activity to mark it as completed. Completed activities will be moved to the bottom of the list.

4. Clear Completed Activities:

- To remove completed activities from the list, click the "Delete" button.

## State Management with Zustand

The Progress Tracker App uses Zustand to manage its state. Zustand is a minimalistic and efficient state management library for React. State management is organized into stores, which are defined in the `store.jsx` file which is within the Source folder.

- `activityStore.js` manages the activities and their states.
- `progressStore.js` calculates and manages the progress based on completed activities.

## Drag and Drop Function

This is a built in JavaScript Feature. Head to Mozilla website to learn more about it.

## Acknowledgments

- The Progress Tracker App was built using React and Zustand, with the help of the "react-beautiful-dnd" library for drag and drop functionality.

---

Happy tracking your progress! If you have any questions or encounter any issues, please feel free to reach out to us.
