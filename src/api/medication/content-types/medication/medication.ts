// Interface automatically generated by schemas-to-ts

export enum Meal {
  Independently = 'independently',
  Before = 'before',
  After = 'after',}

export interface Medication {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    meal: Meal;
    time: Date;
  };
}
export interface Medication_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  meal: Meal;
  time: Date;
}

export interface Medication_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  meal: Meal;
  time: Date;
}

export interface Medication_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  meal: Meal;
  time: Date;
}
