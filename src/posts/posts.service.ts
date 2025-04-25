import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';


//Servicio que interactura con la BD
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  create(postData: Partial<Post>): Promise<Post> {
    const post = this.postsRepository.create(postData);
    return this.postsRepository.save(post);
  }

  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}