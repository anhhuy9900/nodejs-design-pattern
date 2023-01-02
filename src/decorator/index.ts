interface SendMessage {
    send() : string;
}

class SendMessageSMS implements SendMessage {
    send(): string {
     return 'Send message SMS'
    }
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

class SendMessageFB extends DecoratorSendMessage {
    send(): string {
        return 'Send message by : FB + ' + super.send();
    }
}

class SendMessageTwitter extends DecoratorSendMessage {
    send(): string {
        return 'Send message by : Twitter + ' + super.send();
    }
}

class SendMessageSlack extends DecoratorSendMessage {
    send(): string {
        return 'Send message by : Slack + ' + super.send();
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
