export type Course = 'Starter' | 'Main' | 'Dessert';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: number;
  quantity?: number;
}
