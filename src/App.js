import React from "react";
import { useState } from "react"

function App() {

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    color: "",
    like: false
  })

  function handleSubmit(event) {
    event.preventDefault()
    console.log(form)
  }

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" name="name" onChange={handleChange} value={form.name} />
      <input type="text" placeholder="lastname" name="lastname" onChange={handleChange} value={form.lastname} />
      <input type="email" placeholder="example@example.com" name="email" onChange={handleChange} value={form.email} />
      <label>
        Pick your favorite flavor:
        <select onChange={handleChange} name="color" value={form.color}>
          <option value=""> -- Pick flavor -- </option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <label>
        <input type="checkbox" name="like" checked={form.like} onChange={handleChange}/>
        Do you like me?
      </label>
      <button>Submit</button>
    </form>
  );
}

export default App;
