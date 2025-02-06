export interface Section {
  id: number;
  content: string;
  heading: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  sections: Section[];
  imageUrl: string;
}
