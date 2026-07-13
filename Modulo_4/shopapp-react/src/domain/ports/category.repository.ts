import type { Category } from '../entities/category.entity'
import type { CategoryStats } from '../entities/category-stats.entity'

export interface CategoryRepository {
  getCategories(): Promise<Category[]>
  getStats(): Promise<CategoryStats>
}
