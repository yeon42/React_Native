// Class

class Person {
    constructor(region_, gender_) {
        this.region = region_;
        this.gender = gender_;
    }

    greetings(val = 'an-nyeong') {
        console.log(val);
    }
}

let korean = new Person('Korea', 'male')
// console.log(korean);

korean.gender = 'female';
// console.log(korean);

// korean.greetings();

class American extends Person {
    constructor(region_, gender_, language_) {
        super(region_, gender_);
        this.language = language_;
    }

    greetings(val = 'hello') {
        console.log(val);
    }
}

let american = new American('USA', 'female', 'English')
// console.log(american);
american.greetings();
