const ItemProducto = ({ producto }) => {
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.precio}</td>
      <td>
        <img
          src={producto.imagen}
          alt={producto.nombreProducto}
          className="img-thumbnail"
        />
      </td>
      <td>{producto.categoria}</td>
      <td>
        <a href="" className="btn btn-danger mx-2">
          <i className="bi bi-trash"></i>
        </a>
        <a href="" className="btn btn-warning">
          <i className="bi bi-pencil-square"></i>
        </a>
      </td>
    </tr>
  );
};

export default ItemProducto;
