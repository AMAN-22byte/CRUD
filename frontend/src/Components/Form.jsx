import { useEffect, useState } from 'react';

const Form = ({ onSave, selected }) => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
    gender: 'Male',
    mobile: ''
  });

  useEffect(() => {
    if (selected) {
      setPerson(selected);
    } else {
      setPerson({
        name: '',
        age: '',
        gender: 'Male',
        mobile: ''
      });
    }
  }, [selected]);

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(person);
    setPerson({
      name: '',
      age: '',
      gender: 'Male',
      mobile: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={person.name} onChange={handleChange} placeholder="Name" required />
      <input name="age" type="number" value={person.age} onChange={handleChange} placeholder="Age" required />
      <select name="gender" value={person.gender} onChange={handleChange}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input name="mobile" value={person.mobile} onChange={handleChange} placeholder="Mobile" required />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
