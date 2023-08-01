import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the schema document
interface IDbs extends Document {
  id: string;
  istrue: boolean;
  // Add more fields here if needed
}

// Define the Mongoose schema
const DbsSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  istrue: { type: Boolean, required: true },
  // Add more fields here if needed
});


export const DbsModel = mongoose.model<IDbs>('Dbs', DbsSchema);
