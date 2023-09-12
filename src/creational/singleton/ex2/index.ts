import { Logger } from './Logger';
import { Shopper } from './Shopper';
import { Store } from './Store';
import { AWSService } from './AWSService';

var logger = new Logger().getInstance();

logger.log('starting app...');

var alex = new Shopper('alex', 500)
var ski_shop = new Store('Steep and Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
])

// logger.log('finished config...');

// console.log(`${logger.count} logs total`);
// logger.logs.map(log => console.log(`   ${log.message}`));


const runAws = () => {
    const aws = new AWSService();
    aws.run();
};

const runAws2 = () => {
    const aws2 = new AWSService();
    aws2.run();
};

runAws();
runAws2();