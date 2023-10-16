import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Task3';
  images=[
  {
    imageSrc:"https://media.istockphoto.com/id/515771117/photo/vinales-valley-cuba.jpg?s=612x612&w=0&k=20&c=yLVz7oo7xOQKRKOytd-y3CahaXjmNM_rtlsUBXpaI-Q=",
    imageAlt:'nature01'
  },
  {
    imageSrc:"https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
    imageAlt:'nature02'
  },
  {
    imageSrc:"https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_640.jpg",
    imageAlt:'nature03'
  },
  {
    imageSrc:"https://media.istockphoto.com/id/515771117/photo/vinales-valley-cuba.jpg?s=612x612&w=0&k=20&c=yLVz7oo7xOQKRKOytd-y3CahaXjmNM_rtlsUBXpaI-Q=",
    imageAlt:'nature04'
  },
  {
    imageSrc:"https://us.123rf.com/450wm/janssenkruseproductions/janssenkruseproductions1901/janssenkruseproductions190100412/117583335-valley-in-vinales-cuba-surrounded-by-mountains-with-a-cloudy-sky-in-the-background.jpg?ver=6",
    imageAlt:'nature05'
  },
  
  ]
}
