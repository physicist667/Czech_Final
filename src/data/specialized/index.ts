export type { SpecializedDirection, SpecializedWord, SpecializedPhrase } from './types';

import { medicineData } from './medicine';
import { itData } from './it';
import { businessData } from './business';
import { constructionData } from './construction';
import { hospitalityData } from './hospitality';
import { exactSciencesData } from './exact-sciences';
import { lawData } from './law';
import { educationData } from './education';
import { transportData } from './transport';
import { artDesignData } from './art-design';

import type { SpecializedDirection } from './types';

export const directions: SpecializedDirection[] = [
  medicineData,
  itData,
  businessData,
  constructionData,
  hospitalityData,
  exactSciencesData,
  lawData,
  educationData,
  transportData,
  artDesignData,
];
