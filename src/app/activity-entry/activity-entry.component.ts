import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-activity-entry',
  templateUrl: './activity-entry.component.html',
  styleUrls: ['./activity-entry.component.css'],
})
export class ActivityEntryComponent implements OnInit {
  activityText: string = '';
  selectedImages: File[] = [];
  constructor(private firestore: AngularFirestore, public router: Router, public auth:AuthService,private http: HttpClient) {}
  uid:string=""; 
  ngOnInit(): void {}
  showPenIcon: boolean = false; // Define showPenIcon property
  hidePenIcon: boolean = false; // Define hidePenIcon proper
  handleImageUpload(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.selectedImages.push(files[i]);
    }
  }
  saveActivity() {
    const uid =this.auth.getCurrentUserUID();
    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate);
    const activityData = {
      Date: formattedDate,
      Data: this.activityText,
      ImageFileNames: this.selectedImages.map(image => formattedDate+'-'+image.name),
    };
    this.firestore
      .collection('activities')
      .add(activityData)
      .then(() => {
        console.log('Activity saved successfully');
        this.activityText = '';
        if (this.selectedImages.length > 0) {
          this.uploadImages(this.selectedImages);
        }
      })
      .catch((error) => {
        console.error('Error saving activity:', error);
      });
  }
  uploadImages(images: File[]) {
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.imageUrl;
        console.log('Image uploaded:', imageUrl);
        // Include imageUrl when saving activity if needed
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  }
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  nav_preview() {
    this.router.navigate(['preview']);
  }
sendUIDtoServer(uid:string){
  const url='http://localhost:3000/uid';
  const data={uid:uid};
  this.http.post(url,data).subscribe((res)=>{console.log("sent");},(error)=>{console.error(error);});
}

}
