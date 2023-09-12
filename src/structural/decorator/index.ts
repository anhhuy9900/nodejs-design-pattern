/**
 * ! Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
 * !  Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.
 * ! The Decorator lets you structure your business logic into layers, create a decorator for each layer and compose objects with various combinations of this logic at runtime. The client code can treat all these objects in the same way, since they all follow a common interface
 * ! The decorator pattern adds extensibility without modifying the original object.
 */
interface SendMessage {
    send() : string;
}

class DecoratorSendMessage implements SendMessage {
    message: SendMessage

    constructor(message: SendMessage) {
        this.message = message
    }

    send(): string {
        return this.message.send();
    }
}

class SendMessageSMS implements SendMessage {
    send(): string {
        return 'Sended message vy SMS'
    }
}

class SendMessageFB extends DecoratorSendMessage {
    send(): string {
        return 'Sended message by FB + ' + super.send();
    }
}

class SendMessageTwitter extends DecoratorSendMessage {
    send(): string {
        return 'Sended message by Twitter + ' + super.send();
    }
}

class SendMessageSlack extends DecoratorSendMessage {
    send(): string {
        return 'Sended message by Slack + ' + super.send();
    }
}

console.log("##### SMS #####");
const sendMsgSMS = new SendMessageSMS();
console.log(sendMsgSMS.send());

console.log("##### FB #####");
const sendMsgFB = new SendMessageFB(sendMsgSMS);
console.log(sendMsgFB.send());

console.log("##### Twitter #####");
const sendMsgTwitter = new SendMessageTwitter(sendMsgFB);
console.log(sendMsgTwitter.send());

console.log("##### Slack #####");
const sendMsgSlack = new SendMessageSlack(sendMsgTwitter);
console.log(sendMsgSlack.send());
