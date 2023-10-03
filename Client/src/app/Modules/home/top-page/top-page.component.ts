import { Component } from '@angular/core';
import { Chip, Recentbookmark } from 'src/app/Model/folder';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent {
  activeChip: Chip = {
    name: 'Design',
    active: true
  }
  chips: Chip[] = [
    {
      name: 'Design',
      active: false
    },
    {
      name: 'Health',
      active: false

    },
    {
      name: 'IDE',
      active: false

    },
    {
      name: 'Book',
      active: false
    },
    {
      name: 'Coding',
      active: false
    },
    {
      name: 'Swift',
      active: false
    },
    {
      name: 'Health',
      active: false
    },
    {
      name: 'Tech',
      active: false
    }
  ]

  recenBookmarks: Recentbookmark[] = [
    {
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.png",
      date: "May 18, 2014"
    },

    {
      category: "Tech",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.png",
      date: "September 18, 2023"
    },
    {
      category: "Tech",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.png",
      date: "May 18, 2014"
    },
    {
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.png",
      date: "Apr 30, 2023"
    },
    {
      category: "Tech",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.png",
      date: "May 18, 2014"
    },
    {
      category: "Tech",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.png",
      date: "Mar 19, 2023"
    },
  ]
}
