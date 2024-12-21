import UserProfile from './components/UserProfile'
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import Form from './components/Form'
import './App.css'

const App = () => {
  const user = { name: 'Jane Doe', email: 'jane.doe@example.com', age: 28 }
  const todos = ['Learn React', 'Build a project', 'Deploy it']
  const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Smartphone', price: 499 },
    { name: 'Headphones', price: 199 },
  ]

  const handleSearch = (query) => {
    console.log('Searching for:', query)
  }

  return (
    <div>
      <h1>My App</h1>

      <h2>User Profile</h2>
      <UserProfile user={user} />

      <h2>Todo List</h2>
      <TodoList todos={todos} />

      <h2>Search Bar</h2>
      <SearchBar onSearch={handleSearch} />

      <h2>Product List</h2>
      <ProductList products={products} />

      <h2>Form</h2>
      <Form />
    </div>
  )
}

export default App
