import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {ApiOkResponse} from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @ApiOkResponse({type: 'number', isArray: true})
  getHello(): string {
    return this.appService.getHello();
  }
}
