class SendMail {
    send() {
        return 'Send mail';
    }
}

class CreateBody {
    create() {
        return 'Create body';
    }
}

class AddSubject {
    create() {
        return 'Add subject';
    }
}

class Facade {
    sendMail: SendMail
    createBody: CreateBody
    addSubject: AddSubject

    constructor(
        sendMail: SendMail,
        createBody: CreateBody,
        addSubject: AddSubject
    ) {

        this.sendMail = sendMail;
        this.createBody = createBody;
        this.addSubject = addSubject;
    }

    run() {
        console.log(this.sendMail.send());
        console.log(this.createBody.create());
        console.log(this.addSubject.create());
    }
}

const facade = new Facade(new SendMail(), new CreateBody(), new AddSubject());
facade.run();
