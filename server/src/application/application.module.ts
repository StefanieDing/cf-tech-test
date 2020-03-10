import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/database.module';
import { applicationProviders } from './application.providers';
import { ApplicationService } from './application.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...applicationProviders,
    ApplicationService,
  ],
})
export class ApplicationModule {}