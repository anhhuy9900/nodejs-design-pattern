/**
 * ! Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
 * The pattern allows you to produce different types and representations of an object using the same construction code.
 * ! Declare these steps in the base builder interface.
 * ! Create a concrete builder class for each of the product representations and implement their construction steps.
 * You can construct objects step-by-step, defer construction steps or run steps recursively.
 */

// The builder interface specifies methods for creating the
// different parts of the create user objects.
interface IUserProperty {
    setFullName(val: string): this;
    setEmail(val: string): this;
    setUserName(val: string): this;
    setPassword(val: string): this;
    setStatus(val: boolean): this;
    buildSignUp(val: string): object;
    buildSignIn(val: string): object;
}

interface IUserSignInProperty {
    userName: string;
    password: string;
}

interface IUserSignUpProperty {
    fullName: string;
    email: string;
    userName: string;
    password: string;
    status: boolean;
}

/**
 * The concrete builder classes follow the builder interface and provide specific implementations of the building steps. 
 * Your program may have several variations of builders, each implemented differently.
 */
class UserBuilder implements IUserProperty {
    protected fullName!: string;
    protected email!: string;
    protected userName!: string;
    protected password!: string;
    protected status!: boolean;

    setFullName(val: string) {
        this.fullName = val;
        return this;
    }

    setEmail(val: string) {
        this.email = val;
        return this;
    }

    setUserName(val: string) {
        this.userName = val;
        return this;
    }

    setPassword(val: string) {
        this.password = val;
        return this;
    }

    setStatus(val: boolean) {
        this.status = val;
        return this;
    }

    buildSignUp(): IUserSignUpProperty {
        return {
            fullName: this.fullName,
            email: this.email,
            userName: this.userName,
            password: this.password,
            status: this.status,
        };
    }
    buildSignIn(): IUserSignInProperty {
        return {
            userName: this.userName,
            password: this.password,
        };
    }
}

const signUpBuilder = new UserBuilder()
    .setFullName('John Doe')
    .setEmail('test@email.com')
    .setUserName('johndoe')
    .setPassword('123456')
    .setStatus(true);
const userInfoSignUp = signUpBuilder.buildSignUp();
console.log('User information to sign up ->  ', userInfoSignUp);

const userInfoSignIn = signUpBuilder.buildSignIn();
console.log('User information to sign in ->  ', userInfoSignIn);