import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { coachDto } from './coach/coach.dto';
@Controller('posts')
export class AppController {
    coachService: any;
  constructor(private readonly appService: AppService) {}

 @Get()
    getPosts(){
        let posts={
            user: '',
            qualification: '',
            coach_blog: '',
            coach_desc: ''
        }
        return posts;
    }
    @Post()
    coach(@Body() CoachDto: coachDto){
        return this.coachService.coach(CoachDto)
    }
}