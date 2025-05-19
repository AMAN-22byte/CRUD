import { useEffect, useState } from 'react';
import './index.css';
import PersonForm from './Components/Form';
import PersonList from './Components/List';
import * as personService from './Connect/Connect';

function App() {
  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState('');

  const loadPeople = async () => {
    const data = await personService.getPeople();
    setPeople(data);
  };

  useEffect(() => {
    loadPeople();
  }, []);

  const handleSave = async (person) => {
    if (person._id) {
      await personService.updatePerson(person);
      setMessage(`${person.name} details updated.`);
      console.alert(setMessage)
    } else {
      await personService.createPerson(person);
      setMessage(`${person.name} details created.`);
    }
    setSelected(null);
    loadPeople();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this person?')) {
      await personService.deletePerson(id);
      setMessage('Person deleted.');
      loadPeople();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Person Manager</h1>
      <PersonForm onSave={handleSave} selected={selected} />
      {message && <p>{message}</p>}
      <PersonList people={people} onEdit={setSelected} onDelete={handleDelete} />
    </div>
  );
}

export default App;
