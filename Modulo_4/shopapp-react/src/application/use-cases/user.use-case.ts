import type { UserRepository } from '@/domain/ports/user.repository'
import type { UserProfile } from '@/domain/entities/user-profile.entity'
import type { UpdateProfileDto } from '@/application/dtos/update-profile.dto'

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  getProfile(): Promise<UserProfile> {
    return this.userRepository.getProfile()
  }

  updateProfile(dto: UpdateProfileDto): Promise<UserProfile> {
    return this.userRepository.updateProfile(dto)
  }
}
