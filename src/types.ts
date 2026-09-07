export type AppScreen = 'landing' | 'preview' | 'generating' | 'result';

export interface ModelBuildData {
  id: string;
  name: string;
  category: string;
  tier: string;
  photoUrl: string;
  renderUrl: string;
  pieceCount: number;
  uniqueTypes: number;
  buildSteps: number;
  dimensions: string;
  colors: Array<{ name: string; hex: string; count: number }>;
  steps: Array<{
    stepNumber: number;
    title: string;
    description: string;
    piecesUsed: number;
  }>;
}
