import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CoachModel } from './coach.model';
import { Model } from 'mongoose';

interface Coc{
    user: string,
    qualification:string,
    address_set:{
        line1:string,
        line2:string,
        city:string,
        state:string,
        country:string,
        zip:string
    }[],
    coach_blog:string,
    coach_desc:string
}


@Injectable()
export class CoachService {
    constructor(
        @InjectModel("coach") private coachModel: Model<CoachModel>
    ){}

    async coach(coc:Coc){
        const newUser= new this.coachModel({
            user: coc.user,
            qualification: coc.qualification,
            address_set:[
                coc.address_set
            ],
            coach_blog: coc.coach_blog,
            coach_desc:coc.coach_desc
        })
        try{
            await newUser.save()
        }
        catch(error){
            console.log(error)
        }
    }
}
