import {Component, Input} from '@angular/core';
import {Image} from "../../models/image";
import {transition, trigger, useAnimation} from "@angular/animations";
import {fadeIn} from "../../animations/animations";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    animations: [
        trigger("fadeIn", [
            transition(":enter", [useAnimation(fadeIn, {params: {time: '500ms'}})]),
        ]),
    ],
})
export class GalleryComponent {

    @Input() public images!: Image[];

    public imageIndex = 0;

    public prev(): void {
        this.imageIndex--;
        if (this.imageIndex <= 0) this.imageIndex = 0;
    }

    public next(): void {
        this.imageIndex++;
        if (this.imageIndex >= this.images.length) this.imageIndex = this.images.length - 1;
    }
}
