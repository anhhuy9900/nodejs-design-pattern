interface ICreateProfile<T> {
    setData(data: T): void;
    saveData(): T;
}

class CreateProfileWebAppDecorator<T extends object> implements ICreateProfile<T> {
    data!: T;

    constructor() {}

    setData(data: T) {
        this.data = {
            webApp: 'Web',
            ...this.data,
            ...data
        };
    }

    saveData(): T {
        console.log('CreateProfileWebAppDecorator - save data: ', this.data);
        return this.data;
    }
}

class CreateProfileMobileDecorator<T extends object> implements ICreateProfile<T> {
    data!: T;

    protected profile: ICreateProfile<T>;

    constructor(profileObj: ICreateProfile<T>) {
        this.profile = profileObj
    }

    setData(data: T) {
        this.profile?.setData(data);
    }

    saveData(): T {
        this.profile?.saveData()
        console.log('CreateProfileMobileDecorator - save data: ', this.data);
        return this.data;
    }
}

class CreateProfileAndroid extends CreateProfileMobileDecorator<object> {
    setData(data: object = {}) {
        this.data = {
            createdAndroid: true,
            androidName: 'Android',
            ...this.data,
            ...data
        };
    }

    saveData() {
        console.log('CreateProfileAndroid - save data: ', this.data);
        return this.data;
    }
}

class CreateProfileIOS extends CreateProfileMobileDecorator<object> {
    setData(data: object = {}) {
        this.data = {
            ...this.data,
            createdIOS: false,
            iosName: 'IOS',
            ...data
        };

        if ('createdAndroid' in this.data && this.data.createdAndroid) {
            this.data = {
                ...this.data,
                createdIOS: true,
            };
        }
        return this.data;
    }

    saveData() {
        console.log('CreateProfileIOS - save data: ', this.data);
        return this.data;
    }
}

class CreateProfileApp {
    create(data: object) {
        const webApp =  new CreateProfileWebAppDecorator()
        webApp.setData(data);
        const nData = webApp.saveData();
        const android = new CreateProfileAndroid(webApp);
        android.setData(nData);
        const androidData = android.saveData();
        const ios = new CreateProfileIOS(android);
        ios.setData(androidData);
        ios.saveData();
    }
}

const createProfile = new CreateProfileApp();
createProfile.create({ name: 'test', email: 'test@mail.com' });