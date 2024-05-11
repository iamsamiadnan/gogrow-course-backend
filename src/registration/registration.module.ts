import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [RegistrationService, PrismaService],
  controllers: [RegistrationController]
})
export class RegistrationModule {}
