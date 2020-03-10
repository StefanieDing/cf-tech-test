import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Application } from './application.entity';

@Injectable()
export class ApplicationService {
  constructor(
    @Inject('APPLICATION_REPOSITORY')
    private readonly applicationRepository: Repository<Application>,
  ) {}

  async findAll(): Promise<Application[]> {
    return this.applicationRepository.find();
  }
}