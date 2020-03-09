import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  // //creates a new application object
  // postApplication(newApplication): Object {
  // 	return axios.post('/post', newApplication);
  // },
  // //gets all saved applications
  // getAll(): Objects {
  // 	return axios.get('/get');
  // },
  // //gets application by id
  // getOne(id): Object {
  // 	return axios.get('/get/' + id);
  // },
  // //updates application from given id
  // update(id): Object {
  // 	return axios.put('/update/' + id);
  // },
  // //deletes an application from given id
  // delete(id): Object{
  // 	return axios.delete('/delete/' + id);
  // }
}
