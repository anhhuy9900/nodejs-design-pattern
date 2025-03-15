/**
 * There is a class call be Creator class, original class : CollectData
 * The parent of children class used to extends and using it
 */

interface CollectionProviderAPIInterface {
  callAPI(): string;
}

// We create two classes override the factory method to change the
// The facebook class used to call Facebook APi to get data
class FacebookAPICollection implements CollectionProviderAPIInterface {
  constructor() {
    // @TO-DO
  }

  callAPI() {
    // @call API from facebook;

    return 'Facebook Data';
  }
}

class GoogleAPICollection implements CollectionProviderAPIInterface {
  constructor() {
    // @TO-DO
  }

  callAPI() {
    // @call API from Google;

    return 'Google Data';
  }
}

function getDataProvider(type: string) {
  switch (type) {
    case 'google':
      return new GoogleAPICollection().callAPI();
    case 'facebook':
      return new FacebookAPICollection().callAPI();
    default:
      return null;
  }
}

getDataProvider('google');
