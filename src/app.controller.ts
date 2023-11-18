import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly tasksService: TasksService,
  ) {}

  @Get()
  @Render('index')
  async getTasks() {
    const tasks = await this.tasksService.findAll();
    return { tasks };
  }
}
