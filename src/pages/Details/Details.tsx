import { useEffect, useState } from 'react'
import DepartmentTree from '../../components/DepermentComponent/DepartmentTree'
import TableComponent from '../../components/TableComonent/TableComponent'
import ButtonAppBar from '../../components/Navbar/Navbar';

function Details() {
  interface User {
    name: string;
    phoneNumber: string;
    email: string;

  }

  const [user, setUser] = useState<User>({
    name: '',
    phoneNumber: '',
    email: ''
  });
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])
  return (
    <div style={{ padding: '3rem' }}>
      <ButtonAppBar/>
      <h1 style={{ marginBottom: '1rem',marginTop:'2rem' }}>Post Table ------------ Hello {user?.name} 🙋‍♂️</h1>
      <TableComponent />
      <h1 style={{ margin: '2rem 0 1rem 0' }}>Department Tree</h1>
      <DepartmentTree />

    </div>
  )
}

export default Details