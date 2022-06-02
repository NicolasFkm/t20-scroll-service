import { Size } from '@prisma/client';

export class CreateEnemyInput {
  name: string;
  difficult: number;
  initiative: number;
  perception: number;
  armor: number;
  healthPoints: number;
  movement: number;
  level: number;
  size: Size;
}

export class UpdateEnemyDefenseInput {
  armor: number;
  healthPoints: number;
}
