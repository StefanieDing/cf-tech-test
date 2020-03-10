import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { getManager, getRepository } from 'typeorm';

@Controller()
export class AppController {

  // //creates a new application object to db
  // @Post()
  
  // }
  
  //selects all applications
  // @Get('/get')
  //   getAll(){
  //     return getManager.find(Application);
  // }

  // //selects object by id
  // @Get('/get/:id') {
  //   getOne(@Param('id') id) {
  //     return getRepository(Application).findOne(id);
  //   }
  // }

  // //updates object after it's been edited
  // @Put(':id')
  //   update(@Param('id') id){
  // 	 return getRepository(Application)
  // }

  // //deletes object
  // @Delete(':id')
  //   remove(@Param('id') id){
  // 	return getRepository(Application).delete(id);
  // }
}