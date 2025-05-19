const List=({ people, onEdit, onDelete })=> {
  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Age</th><th>Gender</th><th>Mobile</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {people.map(p => (
          <tr key={p._id}>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td>{p.gender}</td>
            <td>{p.mobile}</td>
            <td>
              <button className="edit"onClick={() => onEdit(p)}>Edit</button>
              <button className="delete" onClick={() => onDelete(p._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;

