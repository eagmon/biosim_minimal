/**
 * Created by video on 1/13/2016.
 */
export class  User {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public password: string,
        public created: string,
        public status: string,
        public role: string,
        public params: string,
        public lastLogin: string
    ) {}
  static makeDummyUser(): User {
      return new User('dummy',
        'First',
        'Last',
        'first.last@gmail.com',
        '99999',
        'pasword',
        '10-10-2200',
        'dummy',
        'user',
        'nnnn',
        '12-12-1999');
  }
}
/**
 * PHP side
 var $objectId;
 var $firstName;
 var $lastName;
 var $email;
 var $password;
 var $phone
 var $createTime;
 var $status;
 var $role;
 var $params;
 var $lastLogin;

 */

