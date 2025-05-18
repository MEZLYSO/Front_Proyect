import axios from 'axios'

const fetchData = () => {

  const fetchUser = async (email: any) => {
    return axios.get("http://192.168.194.170:3001/" + email).then(response => response.data)
  }

  return { fetchUser }
}

export default fetchData
