import { z } from 'zod';

export const paintingSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  description: z.string().min(1, 'Description is required').max(1000, 'Description must be less than 1000 characters'),
  price: z.number().positive('Price must be positive'),
  dimensions: z.string().min(1, 'Dimensions are required'),
  medium: z.string().min(1, 'Medium is required'),
  category: z.string().min(1, 'Category is required'),
  imageUrl: z.string().url('Image URL must be a valid URL'),
  available: z.boolean(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
});

export type PaintingFormValues = z.infer<typeof paintingSchema>;

export const paintingFormSchema = paintingSchema.omit({ id: true, createdAt: true });

export type PaintingCreateFormValues = z.infer<typeof paintingFormSchema>;