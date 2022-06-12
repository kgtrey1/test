export interface IUser {
  username: string,
  email: string,
  bio: string,
}

export const getEmptyUser = (): IUser => ({
  username: '',
  email: '',
  bio: '',
});
