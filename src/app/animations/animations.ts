import {animate, animation, style} from "@angular/animations";

// fadeIn
export const fadeIn = animation([
    style({opacity: 0}),
    animate('{{time}}',
        style({opacity: 1}))
]);

// fadeOut
export const fadeOut = animation([
    animate('{{time}}',
        style({opacity: 0}))
]);
