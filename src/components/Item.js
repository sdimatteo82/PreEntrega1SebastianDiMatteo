const Item = ({ id, name, price, img, stock }) => {
  return (
    <section className="flex flex-wrap justify-center gap-4">
      <article className="card">
        <header>
          <h2>{name}</h2>
        </header>
        <picture>
          <img className=" rounded-xl" src={img} alt={name} />
        </picture>
        <section>
          <p>price: ${price}</p>
          <p>Stock: {stock}</p>
        </section>
        <footer>
          <a
            href={`/item/${id}`}
            className="rounded-lg justify-between py-1 px-2 bg-slate-500 text-white"
          >
            Ver detalle
          </a>
        </footer>
      </article>
    </section>
  );
};
export default Item;
