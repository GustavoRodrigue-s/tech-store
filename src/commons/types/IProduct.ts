type Departament =
  | 'Controles'
  | 'Consoles'
  | 'Notebooks'
  | 'Monitores'
  | 'Televisões'
  | 'Teclados'
  | 'Mouses'
  | 'Fones de ouvido';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  units: number;
  parcels: number;
  department: Departament;
  image: string;
  discount?: number;
  filledStars?: 1 | 2 | 3 | 4 | 5;
}
