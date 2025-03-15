class ServiceLog {
  private instance: any;

  constructor() {
    this.instance = null;
  }

  connect() {
    console.log('======== connect ========');
    return 'Connected';
  }

  getInstance() {
    if (!this.instance) {
      this.instance = this.connect();
    }

    return this;
  }

  getData() {
    if (this.instance === 'Connected') return [1, 2, 3, 4];
    return [];
  }
}

const service = new ServiceLog();

function calculate1() {
  const data = service.getInstance().getData();
  console.log('calculate1 - data: ', data);
}

calculate1();

function calculate2() {
  const data = service.getInstance().getData();
  console.log('calculate2 - data: ', data);
}

calculate2();
