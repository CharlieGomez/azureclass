import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery-9';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
          width: '800px',
          height: '600px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          imageAutoPlay: true,
          imageSize: NgxGalleryImageSize.Contain,
          imageAutoPlayPauseOnHover: true,
          previewCloseOnClick: true,
          previewCloseOnEsc: true,
          thumbnailsMoveSize: 4,
          thumbnailsPercent: 25,
          imageArrowsAutoHide: true,
          thumbnailsArrowsAutoHide: true,
          previewZoom: true,
          imageAutoPlayInterval: 3000

      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 50,
          thumbnailsPercent: 23,
          thumbnailsColumns: 3
      },
      // max-width 400
      {
          breakpoint: 400,
          width: '100%',
          preview: false,
          thumbnailsPercent: 23,
          thumbnailsColumns: 2
      }
  ];

    this.galleryImages = [
      {
        small: 'assets/courses/Azure.png',
        medium: 'assets/courses/Azure.png',
        big: 'assets/courses/Azure.png'
      },
      {
        small: 'assets/courses/Azure1.png',
        medium: 'assets/courses/Azure1.png',
        big: 'assets/courses/Azure1.png'
      },
      {
        small: 'assets/courses/AzureCos.png',
        medium: 'assets/courses/AzureCos.png',
        big: 'assets/courses/AzureCos.png'
      },
      {
        small: 'assets/courses/AzureDev.png',
        medium: 'assets/courses/AzureDev.png',
        big: 'assets/courses/AzureDev.png'
      },
      {
        small: 'assets/courses/AzureDevOps.png',
        medium: 'assets/courses/AzureDevOps.png',
        big: 'assets/courses/AzureDevOps.png'
      },
      {
        small: 'assets/courses/AzureFabric.png',
        medium: 'assets/courses/AzureFabric.png',
        big: 'assets/courses/AzureFabric.png'
      },
      {
        small: 'assets/courses/AzureFunctions.png',
        medium: 'assets/courses/AzureFunctions.png',
        big: 'assets/courses/AzureFunctions.png'
      },
      {
        small: 'assets/courses/AzureMachine.png',
        medium: 'assets/courses/AzureMachine.png',
        big: 'assets/courses/AzureMachine.png'
      },
      {
        small: 'assets/courses/AzureMicroservicios.png',
        medium: 'assets/courses/AzureMicroservicios.png',
        big: 'assets/courses/AzureMicroservicios.png'
      },
      {
        small: 'assets/courses/CloudComp.png',
        medium: 'assets/courses/CloudComp.png',
        big: 'assets/courses/CloudComp.png'
      },
      {
        small: 'assets/courses/CosmoDB.png',
        medium: 'assets/courses/CosmoDB.png',
        big: 'assets/courses/CosmoDB.png'
      },
      {
        small: 'assets/courses/Css.png',
        medium: 'assets/courses/Css.png',
        big: 'assets/courses/Css.png'
      },
      {
        small: 'assets/courses/DevOps.png',
        medium: 'assets/courses/DevOps.png',
        big: 'assets/courses/DevOps.png'
      },
      {
        small: 'assets/courses/Docker.png',
        medium: 'assets/courses/Docker.png',
        big: 'assets/courses/Docker.png'
      },
      {
        small: 'assets/courses/Scrum.png',
        medium: 'assets/courses/Scrum.png',
        big: 'assets/courses/Scrum.png'
      },
  ];
  }

}
