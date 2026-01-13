// Types liés à l'utilisateur (UserEntity, UserStoreState, etc.)

export type UserEntity = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  confirmedAt?: Date | null;
};

export type UserStoreState = {
  user: UserEntity | null;
  loading: boolean;
  error: string | null;
  fetchUser: (id: string) => Promise<UserEntity | null>;
};
