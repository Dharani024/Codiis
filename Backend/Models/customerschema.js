
import mongoose from 'mongoose';

const Customer =  mongoose.model('Customer', new mongoose. Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isSubscribed:{
    type:Boolean,
    default:false
  },
  plan:{
    type:Object
  }

}));


// const _Customer = Customer;
// export { _Customer as Customer }; 
// export const validate = validateCustomer;
export default Customer