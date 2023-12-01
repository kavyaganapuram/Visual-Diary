// activity-preview.component.ts

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
interface Activity {
  Date: string;
  Data: string;
  ImageFileNames: [];
  ImageUrls?: SafeResourceUrl[];
}
@Component({
  selector: 'app-activity-preview',
  templateUrl: './activity-preview.component.html',
  styleUrls: ['./activity-preview.component.css'],
})
export class ActivityPreviewComponent implements OnInit {
  selectedDate: string = '';
  formattedSelectedDate: string = '';
  activities: Activity[] = [];
  constructor(
    private firestore: AngularFirestore,
    private datePipe: DatePipe,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  retrieveActivities() {
    if (this.selectedDate) {
      this.formattedSelectedDate =
        this.datePipe.transform(new Date(this.selectedDate), 'MMM dd, yyyy') || '';

      this.firestore
        .collection('activities', (ref) =>
          ref.where('Date', '==', this.formattedSelectedDate)
        )
        .get()
        .subscribe((querySnapshot) => {
          this.activities = querySnapshot.docs.map((doc) => {
            const activity = doc.data() as Activity;
            return activity;
          });

          this.fetchImageUrls();
        });
    }
  }

  fetchImageUrls() {
    this.activities.forEach(activity => {
      const imageFileNames = activity.ImageFileNames;
      activity.ImageUrls = imageFileNames.map(filename => {
        const imageUrl = `http://localhost:3000/uploads/${filename}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
      });
    });
  }
  line:string="";
  
  isImage(url:SafeResourceUrl) {
    this.line= url.toString()
    return this.line.match(/\.(jpeg|jpg|gif|png)$/) !== null;
  }
  
}
