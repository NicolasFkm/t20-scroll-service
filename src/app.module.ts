import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnemyModule } from './modules/enemies/enemies.module';
import { PrismaModule } from './modules/prisma';

@Module({
  imports: [PrismaModule, EnemyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
