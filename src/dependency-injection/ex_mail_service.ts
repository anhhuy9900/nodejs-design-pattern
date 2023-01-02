

interface IEmailService {
    sendEmail(email: string, subject: string, message: string): void;
}

class SimpleEmail implements IEmailService {
    sendEmail(email: string, subject: string, message: string) {
        console.log(`Now we using SimpleEmail to send mail to ${email} with subject ${subject} and message ${message}`);
    }
}

class SendGridEmail implements IEmailService {
    sendEmail(email: string, subject: string, message: string) {
        console.log(`Now we using SendGridEmail to send mail to ${email} with subject ${subject} and message ${message}`);
    }
}

class MailService {
    mailService: IEmailService;

    constructor(mailService: IEmailService) {
        this.mailService = mailService;
    }

    send(to: string, subject: string, message: string) {
        console.log(`Mail sent to ${to}, ${subject}: ${message}`);
        this.mailService.sendEmail(to, subject, message);
    }

    getEmail() {
        return 'email@test.com'
    }

    sendExternal(subject: string, message: string) {
        // Call action to get email from external before send email
        const email = this.getEmail();
        console.log(`Mail sent to ${email}, ${subject}: ${message}`);
        this.send(email, subject, message);
    }
}

const mail = new MailService(new SimpleEmail());
mail.send('test@email.com', 'SimpleEmail', 'Test message');

// using another lib email
const sendExternal = new MailService(new SendGridEmail());
mail.send('huy@email.com', 'SendGridEmail', 'Test message');

