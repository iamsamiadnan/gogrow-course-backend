import { INestApplication, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
