import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/post.entity';

//Credenciales de la BD(no se usara .env para este caso)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',        
      port: 5432,               
      username: 'postgres',   
      password: '',//agregar password de la BD  
      database: 'postgres', 
      entities: [Post],
      synchronize: true,        
    }),
    PostsModule,
  ],
})
export class AppModule {}