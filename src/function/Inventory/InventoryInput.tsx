import { useState } from "react";

type InventoryInputProps = {
  user: string; // logged-in username
  onPost: (data: {
    user: string;
    productName: string;
    quantity: number;
    expiry?: { year: string; month: string; day: string };
    mfg?: { year: string; month: string; day: string };
  }) => void;
};

const InventoryInput = ({ user, onPost }: InventoryInputProps) => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [expiry, setExpiry] = useState({ year: "", month: "", day: "" });
  const [mfg, setMfg] = useState({ year: "", month: "", day: "" });

  const handleSubmit = () => {
    // Check if expiry or manufacturing date is empty
    if (
      !expiry.year && !expiry.month && !expiry.day &&
      !confirm("Expiry date is empty. Are you sure?")
    ) return;

    if (
      !mfg.year && !mfg.month && !mfg.day &&
      !confirm("Manufacturing date is empty. Are you sure?")
    ) return;

    onPost({ productName, quantity, expiry, mfg, user });

    // Reset form
    setProductName("");
    setQuantity(1);
    setExpiry({ year: "", month: "", day: "" });
    setMfg({ year: "", month: "", day: "" });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={{ marginBottom: "8px", width: "100%", padding: "8px" }}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{ marginBottom: "8px", width: "100%", padding: "8px" }}
      />
      <div style={{ marginBottom: "8px" }}>
        <label>Expiry Date (optional): </label>
        <input
          type="text"
          placeholder="Year"
          value={expiry.year}
          onChange={(e) => setExpiry({ ...expiry, year: e.target.value })}
          style={{ width: "60px", marginRight: "4px" }}
        />
        <input
          type="text"
          placeholder="Month"
          value={expiry.month}
          onChange={(e) => setExpiry({ ...expiry, month: e.target.value })}
          style={{ width: "50px", marginRight: "4px" }}
        />
        <input
          type="text"
          placeholder="Day"
          value={expiry.day}
          onChange={(e) => setExpiry({ ...expiry, day: e.target.value })}
          style={{ width: "50px" }}
        />
      </div>

      <div style={{ marginBottom: "8px" }}>
        <label>Manufacturing Date (optional): </label>
        <input
          type="text"
          placeholder="Year"
          value={mfg.year}
          onChange={(e) => setMfg({ ...mfg, year: e.target.value })}
          style={{ width: "60px", marginRight: "4px" }}
        />
        <input
          type="text"
          placeholder="Month"
          value={mfg.month}
          onChange={(e) => setMfg({ ...mfg, month: e.target.value })}
          style={{ width: "50px", marginRight: "4px" }}
        />
        <input
          type="text"
          placeholder="Day"
          value={mfg.day}
          onChange={(e) => setMfg({ ...mfg, day: e.target.value })}
          style={{ width: "50px" }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Add Item
      </button>
    </div>
  );
};

export default InventoryInput;
