class AWSConnect {
  service: string | null = null;

  connection() {
    console.log('Connecting to AWS...');
    return this;
  }

  getService() {
    this.service = 'SQS';
    return this.service;
  }
}

class AWSService {
  static instance: any;

  constructor() {
    if (!AWSService.instance) {
      AWSService.instance = new AWSConnect().connection().getService();
    }
    if (!AWSService.instance) {
      console.log('Can not connect to AWS');
    } else {
      console.log('Connected to AWS');
    }
  }

  getInstance() {
    return AWSService.instance;
  }

  run() {
    console.log('Running Service AWS : ', this.getInstance());
  }
}

export { AWSService };
