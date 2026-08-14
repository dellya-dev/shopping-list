# Shopping List

A simple shopping list application built with React and TypeScript. Users can add, complete, filter, and delete shopping items, with data persisted in the browser using `localStorage`.

## Live Demo
```
[View Live Demo](YOUR_DEPLOYED_URL)

```

## Features

* Add shopping items
* Mark items as completed
* Delete shopping items
* Filter items by:
  * All
  * Active
  * Completed
* Persist shopping items using `localStorage`
* Responsive design
* Custom styled checkbox and interactive UI states

## Tech Stack

* React
* TypeScript
* Vite
* CSS
* Browser `localStorage`

## TypeScript

This project was built as a practical introduction to using TypeScript with React.

Some of the concepts practiced include:

* Static typing
* Type annotations
* Union types
* Typed component props
* Typed state with `useState`
* Function and callback types
* Type-safe component communication
* Type checking with `tsc`

## Data Structure

Each shopping item is represented as:

```ts
{
  id: number;
  title: string;
  completed: boolean;
}
```

## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the local development URL shown in the terminal.

## Type Checking

To check the project for TypeScript errors without generating JavaScript files:

```bash
npx tsc --noEmit
```

## Production Build

To create a production build:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── FilterBar.tsx
│   ├── ShoppingForm.tsx
│   ├── ShoppingItem.tsx
│   └── ShoppingList.tsx
│
├── types/
│   └── shopping.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## What I Practiced

This project was created to practice building a React application with TypeScript while applying concepts learned from TypeScript fundamentals.

The project focused on:

* Component-based architecture
* Props and typed props
* State management with `useState`
* Callback functions between components
* Array methods such as `map()` and `filter()`
* CRUD-style interactions
* Union types
* `localStorage`
* Type checking
* Responsive UI design
* Production builds with Vite

