## Setup

`npm install`
`npm start`,
navigate to `http://localhost:4200/`, and it should work!

## Mission

Undertake the following tasks on the application
(estimated time to complete: 2.5 hours)

## Steps

1. [List view] Add a loading animation on each launch card,
   [List view] add a placeholder image if the image doesnt load/exist
   `src/app/launch-list/launch-list.component.html`

2. [List view] Make each launch card date a relative date eg: 23 days ago as in `list-example.jpg`
   `src/app/launch-list/launch-list.component.html`

3. [Details view] Develop the details screen to fit the wireframe specification `details-wireframe.jpg`
   Avoid code bloat where possible
   `src/app/launch-details/launch-details.component.html`

4. [Details view] Implement NgRx store for launch detail, using the same store and facade pattern as in launch list

5. Fix broken test
