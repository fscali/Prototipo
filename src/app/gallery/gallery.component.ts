import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  spaceScreens: Array<any> = [
      {
        "img": "https://lh3.googleusercontent.com/K3UdS0t311DpKIiq614Ix6cRanFYxueEFaLF3T0bPQLGcJtqzw5ps3ClI85nK7jB4ElbKBs8xg=s640-h400-e365",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0",
        "cols": "2",
        "rows": 2
      },
      {
        "img": "http://www.unoosa.org/res/timeline/index_html/space-2.jpg",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "liked": "0",
        "cols": "1",
        "rows": 1
      },
      {
        "img": "http://space-facts.com/wp-content/uploads/magellanic-clouds.png",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0",
        "cols": 1,
        "rows": 1
      }
  ]

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i,1);
    console.log(i);
  }

}
