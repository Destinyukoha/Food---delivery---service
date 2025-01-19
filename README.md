// FOOD---DELIVERY--- SERVICE
Title of the System: Food Delivery Service
What the System Does:
The Food Delivery Service system allows customers to place orders from local restaurants, track their deliveries, and rate their experiences. It manages users (customers, restaurants, and delivery drivers) and enables interactions such as order placement, order tracking, and delivery status updates.

+-----------------------+           +----------------------+
|       Customer        |           |        Order         |
+-----------------------+           +----------------------+
| - customerId: String  |           | - orderId: String    |
| - name: String        |           | - orderStatus: String|
+-----------------------+           +----------------------+
| + placeOrder(Order):  |           | + updateStatus(String)|
|   void                |           |   : void             |
| + trackOrder(String): |           | + getOrderDetails(): |
|   String              |           |   String             |
+-----------------------+           +----------------------+
https://github.com/Destinyukoha/Food---delivery---service