import {Component} from '@angular/core';
import {Image} from "./models/image";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'SlideShow';

    public images: Image[] = [
        {
            imgURL: '/assets/images/image-01.webp',
        },
        {
            imgURL: '/assets/images/image-02.webp',
        },
        {
            imgURL: '/assets/images/image-03.webp',
        },
        {
            imgURL: '/assets/images/image-04.webp',
        },
        {
            imgURL: '/assets/images/image-05.webp',
        },
    ];
}
