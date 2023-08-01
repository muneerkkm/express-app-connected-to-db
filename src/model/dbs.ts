import mongoose, { Schema, Document } from 'mongoose';


interface IDbs extends Document {
  id: string;
  istrue: boolean;
  
}


const DbsSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  istrue: { type: Boolean, required: true },

});


export const DbsModel = mongoose.model<IDbs>('Dbs', DbsSchema);
