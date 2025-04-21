import { z } from 'zod';
import { CategoriesAPIResponseSchema } from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>