/**
 * ! The Open-Closed Principle requires that classes should be open for extension and closed to modification.
 */


interface IService {
  fetchingData(): void;
}

/**
 * This CollectDataProvider class to get data from third-party and save data to DB
 * We need to construct an inject class to fetching data that we don't care it come from any providers
 * Any provider service have to implement IService interface, using fetchingData method to fetch data from that provider
 */
class CollectDataProvider {

  protected readonly service: IService;

  constructor(service: IService) {
    this.service = service;
  }

  getDataToSaveDB() {
    const data = this.service.fetchingData();
    console.log('The function used to store data to Database');
    console.log('getDataToSaveDB ===> ', data);
  }
}

/**
 * We should be able to add new functionality without touching the existing code for the class
 */

class GoogleProvider implements IService {

  private url = 'google.com';

  fetchingData() {
    // Call API to google to fetch necessary data

    return `Data from Google with url ${this.url}`;
  }
}

class FacebookProvider implements IService {

  private url = 'facebook.com';

  fetchingData() {
    // Call API to google to fetch necessary data

    return `Data from Facebook with url ${this.url}`;
  }
}

/**
 * If our class design obeyed the Open-Closed principle we would not need to change this class.
 * We just inject any provider service we want to
 */

const google = new CollectDataProvider(new GoogleProvider);
google.getDataToSaveDB();

console.log('=====================================================');

const facebook = new CollectDataProvider(new FacebookProvider);
facebook.getDataToSaveDB();

/**
 * we can't changes the fetching url in class because it's private variable in class
 * ! With the closed statement:
 * ! Some context in OOP, we need to set properties, methods are private or final to avoid the client changing itself value and affected to the my class or library
 */
// google.url = 'new url'; //!Error
