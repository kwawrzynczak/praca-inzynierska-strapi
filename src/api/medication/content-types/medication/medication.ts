// Interface automatically generated by schemas-to-ts

import { User } from '../../../../common/schemas-to-ts/User';
import { User_Plain } from '../../../../common/schemas-to-ts/User';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export enum Meal {
  Independently = 'independently',
  Before = 'before',
  After = 'after',
  With = 'with',}

export interface Medication {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    meal: Meal;
    patient?: { data: User };
    time: string;
    dosage?: string;
    days?: string;
    since?: Date;
  };
}
export interface Medication_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  meal: Meal;
  patient?: User_Plain;
  time: string;
  dosage?: string;
  days?: string;
  since?: Date;
}

export interface Medication_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  meal: Meal;
  patient?: number;
  time: string;
  dosage?: string;
  days?: string;
  since?: Date;
}

export interface Medication_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  meal: Meal;
  patient?: AdminPanelRelationPropertyModification<User_Plain>;
  time: string;
  dosage?: string;
  days?: string;
  since?: Date;
}
