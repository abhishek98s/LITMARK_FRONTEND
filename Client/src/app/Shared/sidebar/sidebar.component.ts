import { Component } from '@angular/core';
import { folder } from 'src/app/Model/folder';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  folders:folder[] =[
    {
      img: 'assets/image/folder-1.png',
      title: 'Technology'
    },
    {
      img: 'assets/image/folder-2.png',
      title: 'Health'
    },
    {
      img: 'assets/image/folder-3.png',
      title: 'Study'
    },
    {
      img: 'assets/image/folder-4.png',
      title: 'Design'
    },
    {
      img: 'assets/image/folder-5.png',
      title: 'Book'
    }
  ]

}
