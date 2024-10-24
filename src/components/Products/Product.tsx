type ProductProps = {
  product: {
    id: number;
    title: string;
    body: string;
  };
};

const Product = ({ product }: ProductProps) => {
  const { id, title: comment } = product;

  const handlePrint = (comments: string): void => {
    console.log(comments);
  };

  return (
    <div onClick={() => handlePrint(product.title)}>
      <h2>{id}</h2>
      <p>{comment}</p>
    </div>
  );
};

export default Product;
