## App Description

This is a simple List App where the main goal is to apply object oriented programming
using Typescript to build our App.

Also i have applied Singleton design pattern on some classes to instantiate a single
instance of the class through the application.

## App Classes & Interfaces:

- ListItem (class) implements Item (interface)
- FullList (class) implements List (interface)
- ListTemplate (class) implements DOMList (interface)

## Applied Design Pattern:

- Singleton Design Pattern on (ListTemplate (class)),
  here we apply singleton design pattern since we have only one list UI template
  through our application and we need to instantiate the listTemplate once and apply
  all methods through this instance.

- Singleton Design Pattern on (FullList (class)),
  here we apply singleton design pattern since we have only one List of Items
  through our application and we need to instantiate the list once and apply
  all methods through this instance.

## Run the App:

- clone the repo.
- change directory to the project root folder.
- npm install
- npm run dev --> to run the app in dev mode
- click on the link appears in you terminal to start the app in your browser.
- in case you want to build the app run --> npm run build
