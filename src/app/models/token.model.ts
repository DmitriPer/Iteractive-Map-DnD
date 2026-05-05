export interface Token {
  id: string;
  type: 'character' | 'enemy' | 'npc' | 'boss';
  name: string;
  imageUrl: string;
  position: { x: number; y: number };
  isVisible: boolean;
  mapId: string;
}
