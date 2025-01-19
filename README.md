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
https://lucid.app/lucidchart/7bc2fdaa-ba9f-414c-84aa-04a79076642c/edit?viewport_loc=-10%2C-10%2C1707%2C789%2C0_0&invitationId=inv_0156cc89-8f87-4c6d-9e95-729e4a5d435a