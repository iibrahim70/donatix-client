# Giver's Heaven - Frontend

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contributing](#contributing)

---

## Introduction

Welcome to the Giver's Heaven frontend repository! This is the client-side of the Post-Disaster Relief Donation Platform, a comprehensive web application built to streamline the process of donating to disaster relief efforts. This platform serves as a centralized hub for donation posts, donor testimonials, and relevant information following a disaster.

---

## Technologies Used

- **Frontend:**

  - React
  - Typescript
  - Redux
  - RTK Query
  - React Router DOM

- **Backend:**

  - Typescript
  - Node
  - Express

- **Database:**
  - MongoDB (Database)
  - Mongoose (Database schemas)

---

## Project Overview

The Giver's Heaven frontend is meticulously crafted to provide an intuitive and user-friendly interface for donors, ensuring an efficient and engaging donation experience. Here's an overview of the main sections and functionalities:

---

## Key Features

1. **Dynamic Theme Switching:**

   - Users can switch between different themes (e.g., light mode, dark mode) based on their preferences.

2. **Home Page:**

   - Engaging hero section showcasing the platform's mission.
   - Donation posts displayed in a card format with key details and a "View Details" button.
   - Top donor testimonials section to inspire trust and engagement.
   - Dynamic carousel for captivating donation photos.
   - Informative sections outlining the platform's objectives and impact.

3. **Login / Register Page:**

   - User-friendly forms for account creation and secure authentication.

4. **All Donations Page:**

   - Visually appealing grid layout displaying donation posts with essential information.
   - "View Details" button for each donation post to provide additional information.

5. **Donation Details Page:**

   - Detailed view of a specific donation post, including images, title, category, amount, and description.
   - "Donate Now" button to facilitate the donation process.

6. **Donors Leaderboard Page:**

   - Showcase the top donors who have made significant contributions to the relief efforts.
   - Display donor names or usernames along with their donation amounts to recognize their generosity.

7. **Community Gratitude Wall Page:**

   - Allow users to post comments of appreciation for the support they've received during difficult times.
   - Users can express their gratitude and share positive messages.

8. **Digital Volunteer Hub Page:**

   - Discover and register for virtual volunteer opportunities.
   - Provide necessary information like email, phone number, and location.

9. **About Us Page:**

   - View the list of volunteers contributing to the cause.
   - Learn more about their dedication and support.

10. **Dashboard:**

    - **Dashboard Home Page (/dashboard):**

      - Visualizes the monthly total donations for the year with a PieChart and BarChart.

    - **All Donation Posts Page (/dashboard/donations):**

      - Table view of donation posts with details like title, category, and amount.

      - Edit or delete individual donation posts.

      - Convenient "Add Donation" button for quick additions.

    - **Create Donation Post Page (/dashboard/create-donation):**

      - User-friendly form to create new donation posts.
      - Includes fields for image, category, title, amount, and description.

    - **Interactive Testimonials Page (/dashboard/create-testimonial):**

      - Allow donors to share their experiences and encourage others to participate.
      - Post testimonials about the donation posts they've contributed to.

---

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iibrahim70/givers-heaven-client/
   ```

2. Navigate to the project directory:

   ```bash
   cd givers-heaven-client
   ```

### Running the Application

1. Install dependencies:

```bash
pnpm i
```

2. Run the development server:

```bash
pnpm dev
```

Open http://localhost:5173 in your browser to view the application.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or new features to add, please fork the repository and submit a pull request.
