import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {SearchFilters} from "../../models/search-filters.model";

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})
export class ProjectSearchComponent {
    @Output() onSearch = new EventEmitter<SearchFilters>();
    @ViewChild('filterName') filterName!: ElementRef;
    @ViewChild('filterPriority') filterPriority!: ElementRef;
    @ViewChild('filterDone') filterDone!: ElementRef;

    private get name() {
        const inputName = this.filterName.nativeElement as HTMLInputElement;
        return inputName.value;
    }

    private get priority() {
        const inputPriority = this.filterPriority.nativeElement as HTMLSelectElement;
        return inputPriority.value as 'low' | 'medium' | 'high';
    }

    private get done() {
        const inputDone = this.filterDone.nativeElement as HTMLSelectElement;
        return inputDone.value as 'true' | 'false';
    }

    search() {
        this.onSearch.emit(
            {
                name: this.name,
                priority:this.priority,
                done: this.done
            }
        )
    }
}
