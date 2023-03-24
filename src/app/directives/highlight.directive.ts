import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
    selector:'[highlight]'
})
export class HighlightDirective{
    @HostBinding('style.backgroundColor') private backgroundColor: string = '';

    @HostListener('mouseenter') mouseEnter() {
        this.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') mouseLeave() {
        this.backgroundColor = 'transparent';
    }
}
