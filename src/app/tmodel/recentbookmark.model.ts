export interface Recentbookmark {
  id: number;
  category: string;
  title: string;
  date: string;
  image_id: number;
  image_url?: number;
  url: string;
}

export interface RecentbookmarkResponse {
  data: Recentbookmark[];
}
