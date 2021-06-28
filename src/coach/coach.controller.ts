import { Body, Controller, Post } from '@nestjs/common';
import { coachDto } from './coach.dto';
import { CoachService } from './coach.service';

@Controller('coach')
export class CoachController {

    constructor(
        private readonly coachService:CoachService
    ){}

    @Post()
    coach(@Body() CoachDto: coachDto){
        return this.coachService.coach(CoachDto)
    }
}
