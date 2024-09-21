import { Table } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = ({ items }) => {
  return (
    <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
      <Table striped>
        <Table.Body>
          {items &&
            items.map((product) => (
              <Table.Row key={product._id}>
                <Table.Cell>
                  {" "}
                  <div className="flex items-center gap-4">
                    <Link
                      to={`/product/${product.productId.title}`}
                      className="flex items-center aspect-square w-10 h-10 shrink-0"
                    >
                      <img
                        className="h-auto w-full max-h-full"
                        src={product.productId.image}
                        alt={product.productId.title}
                      />
                    </Link>
                    <Link
                      to={`/product/${product.productId.title}`}
                      className="hover:underline"
                    >
                      {product.productId.title}
                    </Link>
                  </div>
                </Table.Cell>
                <Table.Cell>x{product.quantity}</Table.Cell>
                <Table.Cell>${product.quantity * product.price}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default OrderSummary;
