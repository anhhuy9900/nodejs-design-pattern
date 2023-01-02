var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SendMessageSMS = /** @class */ (function () {
    function SendMessageSMS() {
    }
    SendMessageSMS.prototype.send = function () {
        return 'Send message SMS';
    };
    return SendMessageSMS;
}());
var DecoratorSendMessage = /** @class */ (function () {
    function DecoratorSendMessage(message) {
        this.message = message;
    }
    DecoratorSendMessage.prototype.send = function () {
        return this.message.send();
    };
    return DecoratorSendMessage;
}());
var SendMessageFB = /** @class */ (function (_super) {
    __extends(SendMessageFB, _super);
    function SendMessageFB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendMessageFB.prototype.send = function () {
        return 'Send message by : FB + ' + _super.prototype.send.call(this);
    };
    return SendMessageFB;
}(DecoratorSendMessage));
var SendMessageTwitter = /** @class */ (function (_super) {
    __extends(SendMessageTwitter, _super);
    function SendMessageTwitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendMessageTwitter.prototype.send = function () {
        return 'Send message by : Twitter + ' + _super.prototype.send.call(this);
    };
    return SendMessageTwitter;
}(DecoratorSendMessage));
var SendMessageSlack = /** @class */ (function (_super) {
    __extends(SendMessageSlack, _super);
    function SendMessageSlack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendMessageSlack.prototype.send = function () {
        return 'Send message by : Slack + ' + _super.prototype.send.call(this);
    };
    return SendMessageSlack;
}(DecoratorSendMessage));
console.log("##### SMS #####");
var sendMsgSMS = new SendMessageSMS();
console.log(sendMsgSMS.send());
console.log("##### FB #####");
var sendMsgFB = new SendMessageFB(sendMsgSMS);
console.log(sendMsgFB.send());
console.log("##### Twitter #####");
var sendMsgTwitter = new SendMessageTwitter(sendMsgFB);
console.log(sendMsgTwitter.send());
console.log("##### Slack #####");
var sendMsgSlack = new SendMessageSlack(sendMsgTwitter);
console.log(sendMsgSlack.send());
