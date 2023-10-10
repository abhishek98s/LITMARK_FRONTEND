import { Injectable } from '@angular/core';
import { Chip, Recentbookmark, folder, insideFolder } from './Model/folder';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  public sidebar = false;

  private recentBookmark: Recentbookmark[] = [
    {
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.png",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/neumorphism'
    },

    {
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.png",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.png",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.png",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      category: "UI Design",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.png",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/new-whatsapp-ui-design'
    },
    {
      category: "Tools",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.png",
      date: "Mar 19, 2023",
      link: 'https://www.creativebloq.com/how-to/20-best-ui-design-tools'
    },
    {
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.png",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/neumorphism'
    },

    {
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.png",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.png",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.png",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      category: "UI Design",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.png",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/new-whatsapp-ui-design'
    },
    {
      category: "Tools",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.png",
      date: "Mar 19, 2023",
      link: 'https://www.creativebloq.com/how-to/20-best-ui-design-tools'
    },
    {
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.png",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/neumorphism'
    },

    {
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.png",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.png",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.png",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      category: "UI Design",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.png",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/new-whatsapp-ui-design'
    },
    {
      category: "Tools",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.png",
      date: "Mar 19, 2023",
      link: 'https://www.creativebloq.com/how-to/20-best-ui-design-tools'
    },
    {
      category: "Design",
      title: "Is Neumorphism really 2020's hottest design trend?",
      img: "assets/image/bookmark-1.png",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/neumorphism'
    },

    {
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.png",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.png",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.png",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      category: "UI Design",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.png",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/new-whatsapp-ui-design'
    },
    {
      category: "Tools",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.png",
      date: "Mar 19, 2023",
      link: 'https://www.creativebloq.com/how-to/20-best-ui-design-tools'
    },
  ];

  private chips: Chip[] = [
    {
      chipName: 'Health',
      active: false

    },
    {
      chipName: 'IDE',
      active: false

    },
    {
      chipName: 'Book',
      active: false
    },
    {
      chipName: 'Coding',
      active: false
    },
    {
      chipName: 'Swift',
      active: false
    },
    {
      chipName: 'Health',
      active: false
    },
    {
      chipName: 'Tech',
      active: false
    },
    {
      chipName: 'Health',
      active: false

    },
    {
      chipName: 'IDE',
      active: false

    },
    {
      chipName: 'Book',
      active: false
    },
    {
      chipName: 'Coding',
      active: false
    },
    {
      chipName: 'Swift',
      active: false
    },
    {
      chipName: 'Health',
      active: false
    },
    {
      chipName: 'Tech',
      active: false
    },
    {
      chipName: 'Health',
      active: false

    },
    {
      chipName: 'IDE',
      active: false

    },
    {
      chipName: 'Book',
      active: false
    },
    {
      chipName: 'Coding',
      active: false
    },
    {
      chipName: 'Swift',
      active: false
    },
    {
      chipName: 'Health',
      active: false
    },
    {
      chipName: 'Tech',
      active: false
    },
  ]

  private folders: folder[] = [
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
    },
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
    },
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
    },
  ]

  private insideFolder: insideFolder[] = [
    {
      folder: true,
      title: "Design Inspiration",
    },
    {
      folder: true,
      title: "Dribble",
    },
    {
      folder: false,
      category: "UX",
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      img: "assets/image/bookmark-2.png",
      date: "September 18, 2023",
      link: 'https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/'
    },
    {
      folder: false,
      category: "UI Design",
      title: "Nokia unveils Pure UI, a new user interface design language",
      img: "assets/image/bookmark-3.png",
      date: "May 18, 2014",
      link: 'https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php'
    },
    {
      folder: false,
      category: "Tech",
      title: "Google News on smartphones finally picks up Material You makeover",
      img: "assets/image/bookmark-4.png",
      date: "Apr 30, 2023",
      link: 'https://www.androidpolice.com/google-news-material-you-redesign-phones/'
    },
    {
      folder: false,
      category: "UI Design",
      title: "Whatsapp's new UI design looks super sleek",
      img: "assets/image/bookmark-5.png",
      date: "May 18, 2014",
      link: 'https://www.creativebloq.com/news/new-whatsapp-ui-design'
    },
    {
      folder: false,
      category: "Tools",
      title: "The best UI design tools in 2023",
      img: "assets/image/bookmark-6.png",
      date: "Mar 19, 2023",
      link: 'https://www.creativebloq.com/how-to/20-best-ui-design-tools'
    },
  ];

  constructor() { }

  getRecentBookmark() {
    return this.recentBookmark;
  }

  getChips() {
    return this.chips;
  }

  getFolders() {
    return this.folders;
  }
}
