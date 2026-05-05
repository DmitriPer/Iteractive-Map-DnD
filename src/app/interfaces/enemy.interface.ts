export interface EnemyTemplate {
  name: string;
  icon: string;
}

export interface EnemyMapData {
  mapName: string;
  enemies: EnemyTemplate[];
}
