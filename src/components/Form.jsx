import { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
