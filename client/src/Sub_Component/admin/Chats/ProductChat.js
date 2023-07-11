import React from "react";

const ProductChat = () => {
  return (
    <div>
      <iframe
        style={{
          background: "#FFFFFF",
          border: "none",
          borderRadius: 2,
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        }}
        className="mt-5"
        width={440}
        height={380}
        src="https://charts.mongodb.com/charts-vazeezay_database-xamuu/embed/charts?id=64668b1a-a807-4c02-8022-9918dab2ac19&maxDataAge=3600&theme=light&autoRefresh=true"
      />
    </div>
  );
};

export default ProductChat;
