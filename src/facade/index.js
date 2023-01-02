var SendMail = /** @class */ (function () {
    function SendMail() {
    }
    SendMail.prototype.send = function () {
        return 'Send mail';
    };
    return SendMail;
}());
var CreateBody = /** @class */ (function () {
    function CreateBody() {
    }
    CreateBody.prototype.create = function () {
        return 'Create body';
    };
    return CreateBody;
}());
var AddSubject = /** @class */ (function () {
    function AddSubject() {
    }
    AddSubject.prototype.create = function () {
        return 'Add subject';
    };
    return AddSubject;
}());
var Facade = /** @class */ (function () {
    function Facade(sendMail, createBody, addSubject) {
        this.sendMail = sendMail;
        this.createBody = createBody;
        this.addSubject = addSubject;
    }
    Facade.prototype.run = function () {
        console.log(this.sendMail.send());
        console.log(this.createBody.create());
        console.log(this.addSubject.create());
    };
    return Facade;
}());
var facade = new Facade(new SendMail(), new CreateBody(), new AddSubject());
facade.run();
