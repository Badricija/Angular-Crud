Angular CRUD Application with Bootstrap and Angular Material
Introduction
Welcome to our Angular CRUD (Create, Read, Update, Delete) application! This guide will walk you through the setup and installation process, allowing you to seamlessly interact with a db.json server. Our application showcases a curated list of paintings, offering users the ability to view, add, edit, and delete entries. The interface is styled with Bootstrap for a sleek look and incorporates Angular Material components (visit Angular Material) for enhanced user experience.

Prerequisites
Before diving in, ensure you have the following installed on your system:

Node.js (includes npm)
Angular CLI: Install globally using npm install -g @angular/cli
json-server: Install globally using npm install -g json-server
Installation
Angular Setup
Install Angular CLI globally (if not done already):

bash
Copy code
npm install -g @angular/cli
Clone the project repository:

bash
Copy code
git clone <repository-url>
cd <project-name>
Install project dependencies:

Copy code
npm install
DB.json Server Setup
Install json-server globally:

Copy code
npm install -g json-server
Start the json-server:

css
Copy code
json-server --watch db.json
This will serve your database at http://localhost:3000.

Start the Angular application:

Copy code
ng serve
Open your web browser and navigate to:
http://localhost:4200

Features
Bootstrap: The project employs Bootstrap to ensure a responsive and visually appealing application.
Angular Material: Utilizing Angular Material for UI components such as modals, buttons, and alerts enhances the overall user experience.
CRUD Functionality: Users can seamlessly add new paintings, view them in a detailed single view, edit existing entries, or delete them.
Alert Messages: The application incorporates alert messages to guide users during actions like adding, updating, or deleting posts, as well as for input validation.
Conclusion
Explore the intuitive functionalities of our application, offering a seamless way to manage a list of paintings. Built with Angular, and enhanced with Bootstrap and Angular Material, it provides a rich, interactive user interface that communicates in real-time with a db.json server.
