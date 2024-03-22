import { Injectable, WritableSignal, signal } from '@angular/core';
import { Bookmark, bookmarkApiBody, bookmarkResponse, bookmarkArrayResponse, bookmarkSearchResponse } from '../Model/bookmark.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  private bookmark: WritableSignal<Bookmark[]> = signal([
    {
      id: 1,
      title: "Elevate User Experiences with Exceptional UI/UX Design Services",
      image_id: 1,
      date: "September 18, 2023",
      url: "https://www.analyticsinsight.net/elevate-user-experiences-with-exceptional-ui-ux-design-services/"
    },
    {
      id: 4,
      title: "Google News on smartphones finally picks up Material You makeover",
      image_id: 1,
      img: "assets/image/bookmark-4.webp",
      date: "Apr 30, 2023",
      url: "https://www.androidpolice.com/google-news-material-you-redesign-phones/"
    },
    {
      id: 5,
      title: "Is Neumorphism really 2020's hottest design trend?",
      image_id: 1,
      img: "assets/image/bookmark-1.webp",
      date: "May 18, 2014",
      url: "https://www.creativebloq.com/news/neumorphism"
    },
    {
      id: 6,
      title: "Nokia unveils Pure UI, a new user interface design language",
      image_id: 1,
      img: "assets/image/bookmark-3.webp",
      date: "May 18, 2014",
      url: "https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php"
    },
    {
      id: 7,
      title: "Nokia unveils Pure UI, a new user interface design language",
      image_id: 1,
      img: "assets/image/bookmark-3.webp",
      date: "May 18, 2014",
      url: "https://www.gsmarena.com/nokia_unveils_pure_ui_a_new_user_interface_design_language-news-58063.php"
    },
    {
      id: 8,
      title: "The best UI design tools in 2023",
      image_id: 1,
      img: "assets/image/bookmark-6.webp",
      date: "Mar 19, 2023",
      url: "https://www.creativebloq.com/how-to/20-best-ui-design-tools"
    },
    {
      id: 9,
      title: "Whatsapp's new UI design looks super sleek",
      image_id: 1,
      img: "assets/image/bookmark-5.webp",
      date: "May 18, 2014",
      url: "https://www.creativebloq.com/news/new-whatsapp-ui-design"
    },
    {
      id: 10,
      title: "35 features that make Angular stand out from the crowd",
      image_id: 1,
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IaK-N7xvebUFuOfauNXwYw.png",
      date: "May 18, 2014",
      url: "https://mirzaleka.medium.com/35-features-that-make-angular-stand-out-from-the-crowd-293375c368b8#b84b"
    },
    {
      id: 11,
      title: "Back To Square One | JavaScript (JSLand)",
      image_id: 1,
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*dll2cHrs9c-E5HlOggVPUw.jpeg",
      date: "Nov 18, 2023",
      url: "https://github.com/MirzaLeka/JavaScript-Land"
    },
    {
      id: 12,
      title: "TutFlix - Free Education Resources",
      image_id: 1,
      img: "https://logos-world.net/wp-content/uploads/2022/05/Tutflix-Logo-700x394.png",
      date: "Dec 19, 2023",
      url: "https://tutflix.org/"
    }
  ])

  constructor(private http: HttpClient, private toast: ToastService) { }

  // Bookmark
  fetchBookmark(folderId: number) {
    this.http.get<bookmarkArrayResponse>(`http://localhost:5000/api/bookmark/${folderId}`).pipe(
      map((res: bookmarkArrayResponse) => res.data),
    ).subscribe((bookmarks: Bookmark[]) => {
      this.bookmark.set(bookmarks);
    });
  }

  getBookmark() {
    const sortedData: Bookmark[] = this.bookmark().sort((a, b): number => {

      const titleA = a.title || '';
      const titleB = b.title || '';

      return titleA.localeCompare(titleB);
    });

    return sortedData;
  }

  getBookmarkLength() {
    return this.bookmark().length;
  }

  addBookmark(object: bookmarkApiBody) {
    this.http.post<bookmarkResponse>(`http://localhost:5000/api/bookmark`, object).subscribe({
      next: (res) => {
        this.bookmark().push(res.data)
      },
      error: () => {
        this.toast.error('Failed to add bookmark.')
        return
      }
    });
  }

  updateBookmarkname(id: number, title: string) {
    this.http.patch<bookmarkResponse>(`http://localhost:5000/api/bookmark/${id}`, { title }).subscribe({
      next: () => {
        this.bookmark().map((bookmark: Bookmark) => {
          if (bookmark.id === id) {
            bookmark.title = title
          }
        })
      },
      error: () => {
        this.toast.error('Failed to update bookmark.')
        return
      }
    })
  }

  deleteBookmark(id: number) {
    this.http.delete<bookmarkResponse>(`http://localhost:5000/api/bookmark/${id}`).subscribe({
      next: () => {
        let removedData = this.bookmark().filter((item) => item.id !== id)
        this.bookmark.set(removedData);
      },
      error: () => {
        this.toast.error('Failed to update bookmark.')
        return
      }
    });
  }

  getBookmarkThumbnail(image_id: number) {
    return this.http.get<bookmarkResponse>(`http://localhost:5000/api/image/${image_id}`);
  }

  searchBookmarkByTitle(title: string, folder_id: number) {
    return this.http.get<bookmarkSearchResponse>(`http://localhost:5000/api/bookmark/search?title=${title}&folder_id=${folder_id}`)
  }

  onBookmarkClick(bookmarkId: number) {
    return this.http.patch(`http://localhost:5000/api/bookmark/click/${bookmarkId}`, {})
  }
}
