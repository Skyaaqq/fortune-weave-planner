export type RouteId = 'cai' | 'dietrich' | 'theodora' | 'leda';
export type Category = 'fixed' | 'primary' | 'merge';
export type RouteRecommendationStatus = Category | 'replacement' | 'easy' | 'available' | 'unavailable' | 'spoiler';
export interface GrowthRates { hp: number; str: number; mag: number; spd: number; dex: number; def: number; res: number; lck: number; cha: number }
export interface Character { id: string; nameEn: string; nameZh?: string; rank?: number; spoiler: boolean }
export interface RecruitmentRequirement {
  available: boolean; support?: number; renown?: number; money?: number;
  items?: string[]; quest?: string; notes?: string; automatic?: boolean;
}
export interface Route { id: RouteId; characterId: string; theme: string; color: string; maxR: string; fixed: string[]; primary: string[]; merge: string[] }
export interface StrategyMetadata { date: string; confidence: 'high' | 'medium' | 'experimental'; sources?: string[] }
export interface MetaNote extends StrategyMetadata { characterId?: string; routeId?: RouteId; summary: string }
export interface RosterNote extends StrategyMetadata { role: string; reason: string; tags: string[]; goal?: string }
export interface GameClass {
  id: string; nameEn?: string; nameZh?: string;
  tier: 'basic' | 'intermediate' | 'advanced' | 'master' | 'unknown';
  growthModifiers: Partial<GrowthRates> | null;
  weaponExp?: Record<string, number>;
  nameEvidence: 'prototype-screenshot-claim' | 'unverified' | 'english';
  spoiler?: boolean;
  movement?: number;
  examAndUnlock?: string;
  unlock?: string;
  requiresUnlock?: boolean;
  restriction?: string;
  skillExp?: string;
  traits?: string;
  innateSkills?: string[];
  masteryExp?: number;
  masterySkill?: string;
  sourceRow?: number;
  evidenceNote?: string;
}
export interface BuildStage { classes: string[]; parts: ({ classId: string } | { text: string })[] }
export interface BuildPath {
  stages: BuildStage[]; condition?: string;
  purpose: 'default' | 'rng-fix' | 'merge-primary' | 'merge-secondary' | 'experimental';
}
export interface BuildGuide extends StrategyMetadata { paths: BuildPath[]; reason: string; tag: string; goal?: string }
export interface MergePlan extends StrategyMetadata { characterId: string; optional: boolean; tier: string; reason: string; versions: { routeId: RouteId; goal?: string; alternatePaths?: BuildPath[] }[]; historicalWarning?: string }
export interface SpoilerData {
  characters: Character[]; growths: Record<string, GrowthRates>;
  classes: GameClass[];
  classUnlockDetails: Record<string, string>;
  pre: string[]; p2: string[];
  details: { characterId: string; condition: string; role: string }[];
}
