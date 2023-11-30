import { Injectable } from '@angular/core';
import { Bookmark, Chip, Folder, Recentbookmark, } from './Model/folder';
import { BehaviorSubject, map, tap } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  public sidebar = false;
  public folderInputbox = false;
  public bookmarkInputbox = false;
  public sidebarFolderkInputbox = false;

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

  private folders: Folder[] = [
    {
      id: 1,
      img: 'assets/image/folder-1.png',
      title: 'Tech'
    },
    {
      id: 2,
      img: 'assets/image/folder-2.png',
      title: 'Tools'
    },
    {
      id: 3,
      img: 'assets/image/folder-3.png',
      title: 'UI Design'
    },
    {
      id: 4,
      img: 'assets/image/folder-4.png',
      title: 'Design'
    },
    {
      id: 5,
      img: 'assets/image/folder-5.png',
      title: 'UX'
    },
  ]

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

  private nestedFolder: Folder[] = [
    {
      id: 1,
      "title": "Design Inspiration"
    },
    {
      id: 2,
      "title": "Dribble"
    },
    {
      id: 3,
      "title": "Mobbin"
    }
  ]

  private bookmark: Bookmark[] = [
    {
      id: 1,
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.webp",
      date: "September 18, 2023",
      link: "https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/"
    },
    {
      id: 2,
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.webp",
      date: "September 18, 2023",
      link: "https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/"
    },
    {
      id: 3,
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.webp",
      date: "Apr 30, 2023",
      link: "https://www.androidpolice.com/google-news-material-you-redesign-phones/"
    },
    {
      id: 4,
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.webp",
      date: "Apr 30, 2023",
      link: "https://www.androidpolice.com/google-news-material-you-redesign-phones/"
    },
    {
      id: 5,
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.webp",
      date: "May 18, 2014",
      link: "https://www.creativebloq.com/news/neumorphism"
    },
    {
      id: 6,
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.webp",
      date: "May 18, 2014",
      link: "https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php"
    },
    {
      id: 7,
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.webp",
      date: "May 18, 2014",
      link: "https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php"
    },
    {
      id: 8,
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.webp",
      date: "Mar 19, 2023",
      link: "https://www.creativebloq.com/how-to/20-best-ui-design-tools"
    },
    {
      id: 9,
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.webp",
      date: "May 18, 2014",
      link: "https://www.creativebloq.com/news/new-whatsapp-ui-design"
    },
    {
      id: 10,
      title: "35 features that make Angular stand out from the crowd",
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IaK-N7xvebUFuOfauNXwYw.png",
      date: "May 18, 2014",
      link: "https://mirzaleka.medium.com/35-features-that-make-angular-stand-out-from-the-crowd-293375c368b8#b84b"
    },
    {
      id: 11,
      title: "Back To Square One | JavaScript (JSLand)",
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*dll2cHrs9c-E5HlOggVPUw.jpeg",
      date: "Nov 18, 2023",
      link: "https://github.com/MirzaLeka/JavaScript-Land"
    }
  ]

  recentBookmarkObservable = new BehaviorSubject<Recentbookmark[]>(this.recentBookmark);
  foldersObservable = new BehaviorSubject<Folder[]>(this.folders);

  constructor() { }
  // Recent Bookmark
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

        break;
      default:
        break;
    }
  }

  // Folders
  addFolder(name: string) {
    this.folders.push({
      id: this.folders.length + 1,
      img: 'assets/image/add-folder.png',
      title: name
    },)
    this.sidebarFolderkInputbox = false;
  }

  deleteFolder(id: number) {
    this.foldersObservable.pipe(
      map((folders: Folder[]) => folders.filter(item => item.id !== id)),
      tap((filteredBookmarks: Folder[]) => {
        this.folders = filteredBookmarks;
        this.foldersObservable.next(filteredBookmarks);
      })
    ).subscribe();
  }

  // Chip
  getChips() {
    return this.chips;
  }

  // Nested Folder
  getNestedFolder() {
    const sortedData: Folder[] = this.nestedFolder.sort((a, b): number => {

      // If both have the same folder property, sort alphabetically by title
      const titleA = a.title || ''; // Use an empty string if a.title is undefined
      const titleB = b.title || ''; // Use an empty string if b.title is undefined

      return titleA.localeCompare(titleB);
    });

    return sortedData;
  }

  addNestedFolder(name: string) {
    this.nestedFolder.push({ id: this.nestedFolder.length + 1, title: name })
    this.folderInputbox = false;
  }

  deleteNestedFolder(id: number) {
    this.nestedFolder = this.nestedFolder.filter((item) => item.id !== id)
  }

  // Bookmark
  getBookmark() {
    const sortedData: Bookmark[] = this.bookmark.sort((a, b): number => {

      // If both have the same folder property, sort alphabetically by title
      const titleA = a.title || ''; // Use an empty string if a.title is undefined
      const titleB = b.title || ''; // Use an empty string if b.title is undefined

      return titleA.localeCompare(titleB);
    });

    return sortedData;
  }

  addBookmark(link: string) {
    this.bookmark.push({
      id: 1,
      title: link,
      img: "assets/image/add-bookmark.png",
      date: "September 18, 2023",
      link: "https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/"
    })
    this.bookmarkInputbox = false;
  }

  deleteBookmark(id :number){
    this.bookmark = this.bookmark.filter((item) => item.id !== id)
  }
}