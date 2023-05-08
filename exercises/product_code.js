let supplier = {
  supplierCode: 122,
  productNumber: 34,
  size: 4,
};

function parsePartCode(supplier) {
  console.log(
    "Supplier details: " +
      supplier.supplierCode +
      " Product Number: " +
      supplier.productNumber +
      " Size: " +
      supplier.size
  );
}
parsePartCode(supplier);
