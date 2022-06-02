import { Module } from '@nestjs/common';
import { EnemyModule } from './modules/enemies/enemies.module';
import { PrismaModule } from './modules/prisma';

@Module({
  imports: [PrismaModule, EnemyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
