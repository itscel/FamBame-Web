import type { Item } from "./types";

type InventoryListProps = {
  items: Item[];
};

const InventoryList = ({ items }: InventoryListProps) => {
  if (items.length === 0) {
    return <p>No items yet.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
        >
          <strong>{item.productName}</strong>
        <div>
            
        </div>
          <div>
            Quantity: {item.quantity}
        </div>
          <div>
            Expiry:{" "}
            {item.expiryDate
              ? `${item.expiryDate.year || "-"}-${item.expiryDate.month || "-"}-${item.expiryDate.day || "-"}`
              : "N/A"}
          </div>
          <div>
            Mfg:{" "}
            {item.mfgDate
              ? `${item.mfgDate.year || "-"}-${item.mfgDate.month || "-"}-${item.mfgDate.day || "-"}`
              : "N/A"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryList;
