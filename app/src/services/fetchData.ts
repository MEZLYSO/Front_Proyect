import axios from 'axios'

const fetchData = () => {

  const fetchUser = async (email: any) => {
    return axios.get("http://localhost:3001/" + email).then(response => response.data)
  }

  return { fetchUser }
}

export default fetchData
