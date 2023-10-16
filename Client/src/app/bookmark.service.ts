import { Injectable } from '@angular/core';
import { Chip, Recentbookmark, folder, folderData } from './Model/folder';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  public sidebar = false;

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

  recentBookmarkObservable = new BehaviorSubject<Recentbookmark[]>(this.recentBookmark);

  private chips: Chip[] = [
    {
      chipName: 'All',
      active: true

    },
    {
      chipName: 'Design',
      active: false

    },
    {
      chipName: 'UX',
      active: false

    },
    {
      chipName: 'UI Design',
      active: false

    },
    {
      chipName: 'Tech',
      active: false
    },
    {
      chipName: 'Tools',
      active: false
    },
  ]

  private folders: folder[] = [
    {
      id: '1',
      img: 'assets/image/folder-1.png',
      title: 'Tech'
    },
    {
      id: '2',
      img: 'assets/image/folder-2.png',
      title: 'Tools'
    },
    {
      id: '3',
      img: 'assets/image/folder-3.png',
      title: 'UI Design'
    },
    {
      id: '4',
      img: 'assets/image/folder-4.png',
      title: 'Design' 
    },
    {
      id: '5',
      img: 'assets/image/folder-5.png',
      title: 'UX'
    },
  ]

  private folderData: folderData[] = [
    {
      folder: true,
      title: "Design Inspiration",
    },
    {
      folder: false,
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.webp",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      folder: true,
      title: "Mobbin",
    },
    {
      folder: false,
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.webp",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      folder: true,
      title: "Dribble",
    },
    {
      folder: false,
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.webp",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      folder: false,
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.webp",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/neumorphism'
    },

    {
      folder: false,
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.webp",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      folder: false,
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.webp",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      folder: false,
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.webp",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      folder: false,
      category: "UI Design",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.webp",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/new-whatsapp-ui-design'
    },
    {
      folder: false,
      category: "Tools",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.webp",
      date: "Mar 19, 2023",
      link: 'https://www.creativebloq.com/how-to/20-best-ui-design-tools'
    },


  ];

  constructor() { }

  // getRecentBookmark() {
  //   return this.recentBookmark;
  // }

  getFolders() {
    return this.folders;
  }

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
        this.recentBookmarkObservable.next(filterdBookmarks)
      })
    ).subscribe();
  }

  deleteBookmark(id: number) {
    this.recentBookmarkObservable.pipe(
      map((bookmarks: Recentbookmark[]) => bookmarks.filter(bookmark => bookmark.id !== id)),
      tap((filteredBookmarks: Recentbookmark[]) => {
        this.recentBookmarkObservable.next(filteredBookmarks);
      })
    ).subscribe();
  }

  sortAlphabeticaly(arr: any[]) {

  }

  filterRecentBookmarkBy(type: string) {
    switch (type) {
      case "Date":
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
        break;

      case "Z-A":

        break;

      default:
        break;
    }
  }


  getFolderData() {
    const sortedData: folderData[] = this.folderData.sort((a, b): number => {
      // Sort by folder property (true comes first)
      if (a.folder !== b.folder) {
        return a.folder ? -1 : 1;
      }

      // If both have the same folder property, sort alphabetically by title
      const titleA = a.title || ''; // Use an empty string if a.title is undefined
      const titleB = b.title || ''; // Use an empty string if b.title is undefined

      return titleA.localeCompare(titleB);
    });

    return sortedData;
  }
}