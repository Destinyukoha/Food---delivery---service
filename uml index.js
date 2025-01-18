// Customer Class
class Customer {
    constructor(customerId, name) {
      this.customerId = customerId;
      this.name = name;
    }
  
    placeOrder(order) {
      console.log(`${this.name} placed an order with ID: ${order.orderId}`);
    }
  
    trackOrder(orderId) {
      console.log(`${this.name} is tracking order with ID: ${orderId}`);
    }
  }
  
  // Order Class
  class Order {
    constructor(orderId) {
      this.orderId = orderId;
      this.orderStatus = 'Pending';  
    }
  
    updateStatus(newStatus) {
      this.orderStatus = newStatus;
      console.log(`Order ID: ${this.orderId} status updated to: ${newStatus}`);
    }
  
    getOrderDetails() {
      return `Order ID: ${this.orderId}, Status: ${this.orderStatus}`;
    }
  }


  // Create a new Customer
  const customer1 = new Customer("C001", "John Doe");
  
  // Create a new Order
  const order1 = new Order("O001");
  
  // Customer places an order
  customer1.placeOrder(order1);
  
  // Track the order
  customer1.trackOrder(order1.orderId);
  
  // Update the status of the order
  order1.updateStatus("In Progress");
  
  // Get the order details
  console.log(order1.getOrderDetails());  // Output: Order ID: O001, Status: In Progress
  
  // Update the order status to 'Delivered'
  order1.updateStatus("Delivered");
  console.log(order1.getOrderDetails());  // Output: Order ID: O001, Status: Delivered
  