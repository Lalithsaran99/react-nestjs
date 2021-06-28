import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoachController } from './coach.controller';
import { CoachSchema } from './coach.model';
import { CoachService } from './coach.service';
@Module({
  imports:[
   MongooseModule.forFeature([{
     name:"coach",
     schema:CoachSchema
   }])
  ],
  controllers: [CoachController],
  providers: [CoachService]
})
export class CoachModule {}
