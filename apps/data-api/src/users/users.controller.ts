import { Body, Controller, Post, Get, Put, Request } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}
  //post / signup
  @Post('/signup')
  async addUser(
    @Body('password') userPassword: string,
    @Body('username') userName: string,
  ) {
    // const saltOrRounds = 10;
    // const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
    const result = await this.usersService.insertUser(
      userName,
      userPassword,
    );
    return {
      msg: 'User successfully registered',
      userId: result.id,
      userName: result.username
    };
  }
  @Post('/users')
  async getUser (
    @Body('password') userPassword: string,
    @Body('username') userName: string,
  ){
    const result = await this.usersService.getUser(
      userName
    );
    return {
      msg: 'Got the User successfully ',
      userId: result.id,
      userName: result.username,
      userPassword: result.password
    };
  }
}
