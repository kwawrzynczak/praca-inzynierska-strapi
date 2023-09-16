// Interface automatically generated by schemas-to-ts

export interface AppUser {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    firstname: string;
    lastname: string;
    email: string;
    password?: string;
  };
}
export interface AppUser_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  firstname: string;
  lastname: string;
  email: string;
  password?: string;
}

export interface AppUser_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  firstname: string;
  lastname: string;
  email: string;
  password?: string;
}

export interface AppUser_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  firstname: string;
  lastname: string;
  email: string;
  password?: string;
}
