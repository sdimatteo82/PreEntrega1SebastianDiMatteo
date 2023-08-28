import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, price, category, img, stock }) => {
  return (
    <article className="card ">
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p>categoria: {category} </p>

        <p>precio: {price}</p>
      </section>
      <footer>
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log("cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
