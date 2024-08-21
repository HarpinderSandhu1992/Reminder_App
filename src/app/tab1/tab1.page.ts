import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardSubtitle,
    IonCard,
  ],
})
export class Tab1Page {
  constructor() {}
}
