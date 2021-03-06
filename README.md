# PeachtreeBank

This project scaffolding was generated with [Angular CLI](https://github.com/angular/angular-cli) and with this change it has been upgraded to version 10.0 (from version 9.1.7)
This project also use Angular Material library for all ready to use visual components.

## Release Notes [0.1.1]

### Whats New:
-  Under the hood changes like upgraded angular core libraries to the latest angular version 10.0

### Business Requirements Delivered:

This initial version of this application has completed the following aspects of the business requirements:

- Home Component which brings the two Transfer and Transcation components together
- NotFound Component which shows up on any invalid route
- Transfer Component
    -   Form with 3 fields (From Account, To Account and Amount) and 3 buttons (Clear, Submit, Tranfer)
    -   Checks to not overdraft amount more that $ -500
    -   Clear buttons resets state
    -   Submit button toggles preview state
    -   Transfer button sends transaction record to transaction component
- Transaction Component
    -   Reads the mock JSON to render data on the table
    -   Filter will search per keystroke for matched records to display on the table
    -   Sorting is using Angular Material's inbuilt table header sort per column instead of dedicated buttons which are on the design document.

This project has some requirements which I couldn't make it in time as I only had a weekend to work on this. Here are the things which I couldn't get to:
-   i18n and a11y (a11y was added only in some places using aria-label for accessibility) couldn't be added with time left
-   Couldn't get to adding Kanit specific font
-   Added FlexLayout to handle basic layout management but couldn't get to adding responsive behavior per element with the time left

This project may feel raw in some places but given the right time, this can be made into an application keeping with latest standards.

## Known Bugs
-   In Transaction Component, the close icon on Search by typing will clear the value but doesn't fire the event to reset the table below
-   Sorting works with initial data coming from mock but once a new transaction is added, the sort stops responding. This seems to be tied to this [issue].(https://stackoverflow.com/a/57014516/5420817) but even on making it false it now fails the initial and update event. Also the button sorting seems a bit buggy when new entries are added and needs to be looked into

## About Me
Other than what is already mentioned on my resume, I enjoy working with Front-End technologies more than other things. I have over 12 years of experience and most of which is on Front-End. I keep my self upto date on the latest tech in in industry (and that too not just limited to Front-End). I started as an intern in this idustry and have gotten to a point where I went to architecting sets of UI application as a solution for one of my client, that I worked for and then stablizing as a Tech Lead on the current project which I have been on for around 3 years now. As a career path next move, I have choosen UI Architecture which I did for a little while ago and want to continue on that trajectory.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run the following command to execute the end-to-end tests via [Protractor](http://www.protractortest.org/):

`npm run e2e -- --baseUrl=https://peachtree-bank.netlify.app/`

or 

`npm run e2e -- --baseUrl=http://localhost:4200/`