

import { getAllItems } from '../utils/db.util.js';
import Order from '../models/order.model.js';

class OrderController{
   async getOrder(req, res) {
        const response= await getAllItems(Order)
        res.send(response);
      }
}
export default OrderController;