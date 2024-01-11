# Angular CRUD Application with Bootstrap and Angular Material

## Introduction
Welcome to my Angular CRUD (Create, Read, Update, Delete) application! This guide will walk you through the setup and installation process, allowing you to seamlessly interact with a `db.json` server. My application showcases a curated list of paintings, offering users the ability to view, add, edit, and delete entries. The interface is styled with Bootstrap for a sleek look and incorporates Angular Material components (visit [Angular Material](https://material.angular.io/components/categories)) for enhanced user experience.

## Prerequisites
Before diving in, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (includes npm)
- Angular CLI: Install globally using `npm install -g @angular/cli`
- `json-server`: Install globally using `npm install -g json-server`

## Installation

### Angular Setup
1. Install Angular CLI globally (if not done already):
    ```bash
    npm install -g @angular/cli
    ```

2. Clone the project repository:
    ```bash
    git clone <repository-url>
    cd <Angular-Crud>
    ```

3. Install project dependencies:
    ```bash
    npm install
    ```

### DB.json Server Setup
1. Install `json-server` globally:
    ```bash
    npm install -g json-server
    ```

2. Start the `json-server`:
    ```bash
    json-server --watch db.json
    ```

    This will serve your database at [http://localhost:3000](http://localhost:3000).

3. Start the Angular application:
    ```bash
    ng serve
    ```

### Open your web browser and navigate to:

[http://localhost:4200](http://localhost:4200)

## Features
- **Bootstrap:** The project employs Bootstrap to ensure a responsive and visually appealing application.
- **Angular Material:** Utilizing Angular Material for UI components such as modals, buttons, and alerts enhances the overall user experience.
- **CRUD Functionality:** Users can seamlessly add new paintings, view them in a detailed single view, edit existing entries, or delete them.
- **Alert Messages:** The application incorporates alert messages to guide users during actions like adding, updating, or deleting posts, as well as for input validation.

## Conclusion
Explore the intuitive functionalities of our application, offering a seamless way to manage a list of paintings. Built with Angular, and enhanced with Bootstrap and Angular Material, it provides a rich, interactive user interface that communicates in real-time with a `db.json` server.
