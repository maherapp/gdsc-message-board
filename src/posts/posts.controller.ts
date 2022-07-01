import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { CreatePostDto } from './create-post.dto';
import { PostsService } from './posts.service';
import { UpdatePostDto } from './update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }

  @Post()
  create(@Body() post: CreatePostDto) {
    return this.postsService.create(post);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() post: UpdatePostDto) {
    return this.postsService.update(id, post);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
