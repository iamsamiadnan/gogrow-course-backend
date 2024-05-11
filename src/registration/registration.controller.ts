import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { UserDto } from './dto/user.dto';

@Controller('registration')
export class RegistrationController {

    constructor(private registrationService: RegistrationService) {}

    @Post()
    async createUser(@Body() data: UserDto) : Promise<UserDto> {
        return this.registrationService.createUser(data);
    }
}
