import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateApplicationDto } from './create-application.dto';

@Controller('applications')
export class AppController {
 constructor(private readonly appService: AppService) {}
  
  // //creates a new application object to db
  // @Post()
  // async create(@Body() createApplicationDto: CreateApplicationDto) {
  //   return await this.appService.create(app);
  // }
  
  // //gets all applications
  // @Get()
  // async findAll(@Query() app) {
  //   return await this.appService.query(app);
  // }

  // //gets object to be edited
  // @Get(':id')
  // async findOne(@Param('id') id){
  //   return await this.appService.findOneById(id);
  // }

  // //updates object after it's been edited
  // @Put(':id')
  // async update(@Param('id') id, @Body() updateApplicationDto: UpdateApplicationDto){
  //   return await this.appService.update(app);
  // }

  // //deletes object
  // @Delete(':id')
  // async remove(@Param('id') id){
  //   return await this.appService.remove(id);
//   }
}

