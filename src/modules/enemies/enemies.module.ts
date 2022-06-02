import { Module } from '@nestjs/common';
import { EnemyController } from './enemies.controller';
import { EnemyService } from './enemies.service';
import { EnemyRepository } from './repositories';

@Module({
  controllers: [EnemyController],
  providers: [EnemyRepository, EnemyService],
})
export class EnemyModule {}
