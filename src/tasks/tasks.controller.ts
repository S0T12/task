import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @Redirect('/')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @Redirect('/')
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @Redirect('/')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  @Redirect('/')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @Redirect('/')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
