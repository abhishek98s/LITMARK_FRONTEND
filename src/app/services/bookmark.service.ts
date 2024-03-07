import { Injectable } from '@angular/core';
import { Bookmark } from '../Model/folder';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
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
    },
    {
      id: 12,
      title: "TutFlix - Free Education Resources",
      img: "https://logos-world.net/wp-content/uploads/2022/05/Tutflix-Logo-700x394.png",
      date: "Dec 19, 2023",
      link: "https://tutflix.org/"
    }
  ]


  constructor() { }

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
      id: this.bookmark.length + 1,
      title: link,
      img: "assets/image/add-bookmark.png",
      date: "September 18, 2023",
      link: link
    })
  }

  deleteBookmark(id: number) {
    this.bookmark = this.bookmark.filter((item) => item.id !== id)
  }
}
