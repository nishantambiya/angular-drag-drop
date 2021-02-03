import {Component, OnInit, ViewChild} from '@angular/core';
import * as Chartist from 'chartist';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

    @ViewChild(MatAccordion) accordion: MatAccordion

    movies_1 = [
        'projects',
        'requests',
        'responses',

    ];
    movies_2 = [
        'savings-by-project',
        'savings-by-spent-category',
    ];
    movies_3 = [
        'profile',
    ];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }
}


