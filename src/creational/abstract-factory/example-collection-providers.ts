/**
 * There is a class call be Creator class, original class : CollectData
 * The parent of children class used to extends and using it
 */

interface CollectionProviderInterface {
  getMethodProvider(): object;
}

abstract class CollectionProvider {
  protected name: string | undefined;

  abstract getMethodProvider(): CollectionProviderInterface;

  abstract callAPI(): void;

  getDataProvider() {
    console.log('=============== getDataProvider ================');
    const data = this.callAPI();
    console.log(`Call API from provider name ${this.name} and response data: `, data);
  }
}

// We create two classes override the factory method to change the
// The facebook class used to call Facebook APi to get data
class FacebookCollection extends CollectionProvider {
  constructor() {
    super();
    this.name = 'Facebook';
  }

  getMethodProvider(): CollectionProviderInterface {
    // Get data from facebook
    return this.getMethodProvider();
  }

  callAPI() {
    // @call API from facebook;

    return 'Facebook Data';
  }
}

class GoogleCollection extends CollectionProvider {
  constructor() {
    super();
    this.name = 'Google';
  }

  getMethodProvider(): CollectionProviderInterface {
    // Get data from Google
    return this.getMethodProvider();
  }

  callAPI() {
    // @call API from Google;

    return 'Google Data';
  }
}

function getData(collectionProvider: CollectionProvider) {
  return collectionProvider.getDataProvider();
}

getData(new GoogleCollection());

getData(new FacebookCollection());
