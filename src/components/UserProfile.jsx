const UserProfile = ({ user }) => {
    return (
      <div >
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>
    )
  }
  
  export default UserProfile
  