export type Role = 'master' | 'player' | 'spectator';

export interface User {
  id: number;
  name: string;
  nickname: string;
  role: Role;
  created_at: Date;
  updated_at: Date;
}

export interface InputUser {
  name: string;
  nickname: string;
  role: Role;
}
