import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const allusers = await this.userRepo.find();
    return allusers;
  }
  async getUserById(userId: number): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }
  async deleteUser(userId: number) {
    const user = await this.getUserById(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    const deleteUserr = await this.userRepo.remove(user);
    if (deleteUserr) {
      return { success: true, data: 'user deleted!' };
    }
    return { success: true, data: 'user delete fail!' };
  }
  async updateUser(
    userId: number,
    updateUserDto: Partial<User>,
  ): Promise<User> {
    let user = await this.getUserById(userId);
    user = { ...user, ...updateUserDto };
    await this.userRepo.save(user);
    return user;
  }
}
