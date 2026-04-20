export interface EnemyTemplate {
  name: string;
  icon: string;
}

export interface PlacedEnemy extends EnemyTemplate {
  position: { x: number; y: number };
}

export interface EnemyMapData {
  mapName: string;
  enemies: EnemyTemplate[];
}
