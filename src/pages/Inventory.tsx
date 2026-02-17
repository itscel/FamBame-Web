import { useState } from "react";
import InventoryInput from "../function/Inventory/InventoryInput";
import InventoryList from "../function/Inventory/InventoryList";
import type { Item } from "../function/Inventory/types"; // relative path from InventoryInput

type InventoryProps = {
  username: string;
};

const Inventory = ({ username }: InventoryProps) => {
  const [items, setItems] = useState<Item[]>([]);

  const handleItem = (data: {
    user: string;
    productName: string;
    quantity: number;
    expiryDate?: { year: string; month: string; day: string };
    mfgDate?: { year: string; month: string; day: string };
  }) => {
    const newItem: Item = {
      id: Date.now(),
      user: data.user,
      productName: data.productName,
      quantity: data.quantity,
      expiryDate: data.expiryDate,
      mfgDate: data.mfgDate,
    };

    setItems((prev) => [newItem, ...prev]);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Inventory</h1>
      <InventoryInput user={username} onPost={handleItem} />
      <InventoryList items={items} />
    </div>
  );
};

export default Inventory;
