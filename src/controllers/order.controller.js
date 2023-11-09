
import fs from 'fs';

class OrderController{
    getOrder(req, res) {
        const fileOrders = fs.readFileSync("src/models/orders.json", "utf8");
        const listOrders = JSON.parse(fileOrders);
        res.send(listOrders);
      }
}
export default OrderController;