import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service'

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string

  constructor(private photoService: PhotosService) {
    this.fetchFoto()
  }

  ngOnInit(): void {
  }

  onClick() {
    this.fetchFoto()
  }

  fetchFoto() {
    this.photoService.getPhoto().subscribe(resp => {
      this.photoUrl = resp.urls.regular
    })
  }
}
