export class coachDto{
    readonly user: string;
    readonly qualification: string;
    readonly address_set:{
        line1:string,
        line2:string,
        city:string,
        state:string,
        country:string,
        zip:string,
    }[]
    readonly coach_blog: string;
    readonly coach_desc: string
}