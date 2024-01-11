
# Angular CRUD Application with Bootstrap and Angular Material

## Introduction
This document outlines the setup and installation process for an Angular CRUD (Create, Read, Update, Delete) application which communicates with a `db.json` server. This application provides a list of paintings which users can view individually. Additionally, users have the ability to add new posts, edit existing ones, and delete them. The application incorporates Bootstrap for styling and utilizes components from Angular Material (https://material.angular.io/components/categories).

## Prerequisites
Before you begin, make sure you have the following installed:
- Node.js (which comes with npm) from https://nodejs.org/
- Angular CLI: Install it globally using `npm install -g @angular/cli`
- `json-server`: Install it globally using `npm install -g json-server`

## Installation

### Angular Setup
1. Install Angular CLI globally (if you haven't already):

- npm install -g @angular/cli
- Clone the project repository:

 - git clone <repository-url>

 - cd <project-name>

- npm install

### DB.json Server Setup


- npm install -g json-server


- json-server --watch db.json
This will serve your database at http://localhost:3000.



 - ng serve
### Open your web browser and navigate to:


http://localhost:4200

### Features
- Bootstrap: The project uses Bootstrap to make the application responsive and visually appealing.
- Angular Material: For UI components like modals, buttons, and alerts, the application utilizes Angular Material.
- CRUD Functionality: Users can add new paintings, view them in a detailed single view, edit the details or delete them.
- Alert Messages: The application has alert messages implemented for user guidance whenever a post is added, updated, or deleted, and for input validation.

### Conclusion
This application provides an intuitive way to maintain a list of paintings with functionalities to add, edit, view, and delete entries. It's built using Angular and leverages Bootstrap and Angular Material for a rich, interactive user interface that communicates in real-time with a db.json server.#   A n g u l a r - C r u d  
 