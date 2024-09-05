import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAll() {
    try {
      return await this.postService.getAll();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.postService.get(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post()
  async create(@Body() dto: Prisma.PostCreateInput) {
    try {
      return await this.postService.create(dto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Prisma.PostUpdateInput,
  ) {
    try {
      return await this.postService.update(id, dto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.postService.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
