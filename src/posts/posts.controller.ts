import { Controller, Get, Post as HttpPost, Body, Delete, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';


//Estructura basica para crud
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @HttpPost()
  create(@Body() post: Partial<PostEntity>): Promise<PostEntity> {
    return this.postsService.create(post);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.postsService.remove(id);
  }
}