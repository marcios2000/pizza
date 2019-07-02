UPDATE orders SET name= $2, items_purchased = $3, total=$4 WHERE order_id = $1;


SELECT * FROM orders;