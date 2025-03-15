interface IUserProfileSimpleInfo {
  name: string;
  email: string;
  fullName: string;
  status: string;
}

interface IUserProfileExternalInfo {
  name: string;
  email: string;
  fullName: string;
  phone: string;
  dob: string;
  address: string;
  status: string;
}

// interface IUserProfileInfo {
//     info: IUserProfileSimpleInfo | IUserProfileExternalInfo;
// }

// type IUserProfileInfo = IUserProfileSimpleInfo | IUserProfileExternalInfo;

interface IUserProfile {
  getInfo(): object;
}

class User {
  constructor(public profile: IUserProfile) {}

  async getUserProfile() {
    const profile = this.profile.getInfo();
    return profile;
  }
}

class UserProfileSimple implements IUserProfile {
  info: IUserProfileSimpleInfo;

  constructor(info: IUserProfileSimpleInfo) {
    this.info = info;
  }

  async getInfo(): Promise<IUserProfileSimpleInfo> {
    return this.info;
  }
}

class UserProfileExternal implements IUserProfile {
  info: IUserProfileExternalInfo;

  constructor(info: IUserProfileExternalInfo) {
    this.info = info;
  }

  async getInfo() {
    return this.info;
  }
}

// class ShowInfo {
//     info: IUserProfileInfo;
//     constructor(
//         info: IUserProfileInfo,
//     ) {
//         this.info = info;
//     }

//     async show() {
//         return this.info;
//     }
// }

const userProfileSimple = {
  name: 'John',
  email: 'test@email.com',
  fullName: 'John Doe',
  status: 'active',
};
let user = new User(new UserProfileSimple(userProfileSimple));
user.getUserProfile().then((res: any) => console.log('UserProfileSimple : ', res));

// We have new function get new information of user external and we can inject UserProfileExternal to constructor User
const userProfileExternal = {
  name: 'John',
  email: 'test@email.com',
  fullName: 'John Doe',
  phone: '0987654321',
  dob: '01/01/1990',
  address: 'Ha Noi',
  status: 'active',
};
let userExternal = new User(new UserProfileExternal(userProfileExternal));
userExternal.getUserProfile().then((res: any) => console.log('UserProfileExternal : ', res));

const showInfo = async (type: string = '') => {
  const dataSimple = await user.getUserProfile();
  const dataExternal = await user.getUserProfile();
  console.log('ShowInfo In UserDetail : ', dataSimple);
  console.log('ShowInfo In UserExternalDetail : ', dataExternal);
  switch (type) {
    case 'simple':
      return dataSimple;
    case 'external':
      return dataExternal;
    default:
      return dataSimple;
  }
};

const newData = showInfo();
console.log('ShowInfo In newData : ', newData);
export {};
