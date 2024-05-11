import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/user.dto';


@Injectable()
export class RegistrationService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: UserDto) : Promise<UserDto> {

        console.log(data)
        return this.prisma.user.create({
            data,
        })
    }
}
