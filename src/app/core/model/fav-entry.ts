import { UserInfo } from './user/user-info';

export class FavEntry {
  constructor(
    public readonly name: string,
    public readonly createdAt: Date,
    public readonly modifiedAt: Date,
    public readonly isFolder: boolean,
    public readonly isFile: boolean,
    public readonly id: string, // to be added guid type
    public readonly createdBy: string,
    public readonly modifiedBy: string,
    public readonly createdByUser: UserInfo,
    public readonly modifiedByUser: UserInfo
  ) {}
}
