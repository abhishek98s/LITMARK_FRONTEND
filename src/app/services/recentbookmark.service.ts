import { Injectable } from '@angular/core';

import { Recentbookmark } from '../Model/recentbookmark.model';
import { Chip, } from '../Model/chip.model';
import { SearchObject, } from '../Model/bookmark.model';

import { BehaviorSubject, map, tap } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class recentBookmarkService {

  private filterType = 'Date';

  private recentBookmark: Recentbookmark[] = [
    {
      id: 1,
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.webp",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/neumorphism'
    },

    {
      id: 2,
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.webp",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      id: 3,
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.webp",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      id: 4,
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.webp",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      id: 5,
      category: "UI Design",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.webp",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/new-whatsapp-ui-design'
    },
    {
      id: 6,
      category: "Tools",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.webp",
      date: "Mar 19, 2023",
      link: 'https://www.creativebloq.com/how-to/20-best-ui-design-tools'
    },
    {
      id: 7,
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.webp",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/neumorphism'
    },

    {
      id: 8,
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.webp",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      id: 9,
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.webp",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      id: 10,
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.webp",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      id: 11,
      category: "UI Design",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.webp",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/new-whatsapp-ui-design'
    },
    {
      id: 12,
      category: "Tools",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.webp",
      date: "Mar 19, 2023",
      link: 'https://www.creativebloq.com/how-to/20-best-ui-design-tools'
    },
    {
      id: 13,
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.webp",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/neumorphism'
    },

    {
      id: 14,
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.webp",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      id: 15,
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.webp",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      id: 16,
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.webp",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      id: 17,
      category: "UI Design",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.webp",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/new-whatsapp-ui-design'
    },
    {
      id: 18,
      category: "Tools",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.webp",
      date: "Mar 19, 2023",
      link: 'https://www.creativebloq.com/how-to/20-best-ui-design-tools'
    },
    {
      id: 19,
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.webp",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/neumorphism'
    },

    {
      id: 20,
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.webp",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
  ];

  private chips: Chip[] = [
    {
      id: 1,
      chipName: 'All',
      active: true

    },
    {
      id: 2,
      chipName: 'Design',
      active: false

    },
    {
      id: 3,
      chipName: 'UX',
      active: false

    },
    {
      id: 4,
      chipName: 'UI Design',
      active: false

    },
    {
      id: 5,
      chipName: 'Tech',
      active: false
    },
    {
      id: 6,
      chipName: 'Tools',
      active: false
    },
  ]

  recentBookmarkObservable = new BehaviorSubject<Recentbookmark[]>(this.recentBookmark);

  getFilterType() {
    return this.filterType
  }

  // Chip
  getChips() {
    return this.chips;
  }

  filterRecentBookmarkByChip(chipCategory: string) {
    this.chips.forEach((chip: Chip) => { chip.active = false; });

    let selectedChip = this.chips.find((chip: Chip) => chip.chipName == chipCategory);

    if (selectedChip) {
      selectedChip.active = true;
    }

    if (chipCategory == 'All') {
      this.recentBookmarkObservable.next(this.recentBookmark);
      return
    }

    this.recentBookmarkObservable.pipe(
      map((bookmarks: Recentbookmark[]) =>
        this.recentBookmark.filter((bookmark) => bookmark.category === chipCategory)),
      tap((filterdBookmarks: Recentbookmark[]) => {
        this.recentBookmarkObservable.next(filterdBookmarks);
      })
    ).subscribe();
  }

  // Recent Bookmark
  sortRecentBookmarkBy(type: string) {
    switch (type) {
      case "Date":
        this.filterType = "Date";
        break;

      case "A-Z":
        this.recentBookmarkObservable.pipe(
          map((recentBookmark: Recentbookmark[]) => {
            recentBookmark.sort((a, b) => {
              const titleA = a.title || '';
              const titleB = b.title || '';
              return titleA.localeCompare(titleB);
            }),
              tap((sortedRecentBookmark: Recentbookmark[]) => {
                this.recentBookmarkObservable.next(sortedRecentBookmark);
              })
          })
        ).subscribe();
        this.filterType = "A-Z";
        break;

      case "Z-A":
        this.recentBookmarkObservable.pipe(
          map((recentBookmark: Recentbookmark[]) => {
            recentBookmark.sort((a, b) => {
              const titleA = a.title || '';
              const titleB = b.title || '';
              return titleB.localeCompare(titleA);
            }),
              tap((sortedRecentBookmark: Recentbookmark[]) => {
                this.recentBookmarkObservable.next(sortedRecentBookmark);
              })
          })
        ).subscribe();
        this.filterType = "Z-A";
        break;
      default:
        break;
    }
  }

  deleteRecentBookmark(id: number) {
    this.recentBookmarkObservable.pipe(
      map((bookmarks: Recentbookmark[]) => bookmarks.filter(bookmark => bookmark.id !== id)),
      distinctUntilKeyChanged('length'), // Using array length as a key for comparison
      tap((filteredBookmarks: Recentbookmark[]) => {
        this.recentBookmark = filteredBookmarks;
        this.recentBookmarkObservable.next(filteredBookmarks);
      })
    ).subscribe();
  }

  filterByTitle(searchText: string) {
    const filteredData: SearchObject[] = this.recentBookmark.filter(item => {
      const bookmarkTitle = item.title.toLowerCase();
      return bookmarkTitle.includes(searchText.toLowerCase());
    }).map((filterItem) => {
      const { title, link } = filterItem;
      return { title, url: link }
    });

    return filteredData;
  }
}
