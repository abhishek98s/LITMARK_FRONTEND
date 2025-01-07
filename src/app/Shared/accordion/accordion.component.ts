import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  itemSet = new Set<number>([]);

  items = [
    {
      id: 1,
      title: 'Is there a free trial?',
      content: 'The app is free with unlimited bookmark and folder',
    },
    {
      id: 2,
      title: 'Is there limit to store the bookmarks?',
      content: 'No, you can store as many bookmarks as you like.',
    },
    {
      id: 3,
      title: 'Can we add folder inside the folder?',
      content:
        'Yes, you can add folder inside the folder to organiza your bookmarks more  efficirntly',
    },

    {
      id: 4,
      title: 'How much can the nested folder go?',
      content: 'Nested folder can go as many as nested as you like.',
    },

    {
      id: 5,
      title: 'Can i control using keyboard navigation?',
      content:
        'Yes, we have focus on keyboard aceesibilty so it would be easier to use the application.',
    },
    {
      id: 6,
      title: 'Can i search my 100s of saved bookmarks?',
      content:
        'Yes, you can search you bookmarks inside the a folder using the search box',
    },

    {
      id: 7,
      title: 'Do I have to manually add the thumbnail of the bookmark?',
      content: 'No, the thumbnail is automtically managed by our system.',
    },

    {
      id: 8,
      title: 'Can i sort and filter my bookmarks?',
      content: 'Yes, you can sort and filter you bookmars.',
    },
  ];

  isOpen(index: number) {
    return this.itemSet.has(index) ? 1 : 0;
  }

  toggleItem(index: number) {
    if (this.isOpen(index)) {
      this.itemSet.delete(index);
      return;
    }
    this.itemSet.clear();
    this.itemSet.add(index);

    // this.items.forEach((item, i) => {
    //   item.isOpen = i === index ? !item.isOpen : false;
    // });
  }
}
