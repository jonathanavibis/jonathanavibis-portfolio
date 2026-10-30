import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;