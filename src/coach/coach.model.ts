import { Schema,Prop,SchemaFactory, raw } from "@nestjs/mongoose";
import { Document, Mongoose, Types } from "mongoose";
const { ObjectId } = Types
interface address
{
        line1:{type:String, default:''};
        line2:{type:String, default:''};
        city:{type:String, default:''};
        state:{type:String, default:''};
        country:{type:String, default:''};
        zip:{type:String, default:''}
}
@Schema()
export class coach {
    @Prop()
    user: String;

    @Prop()
    qualification:String;

    @Prop(raw([{}]))
    address_set:address[];

    @Prop()
    coach_blog:String;

    @Prop()
    coach_desc:String;
}

export type CoachModel = coach & Document

export const CoachSchema = SchemaFactory.createForClass(coach)