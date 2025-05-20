import axios from 'axios'

const fetchData = () => {

  const fetchUser = async (email: any) => {
    return axios.get("http://192.168.166.170:3001/" + email).then(response => response.data)
  }

  const fetchUserById = async (id: any) => {
    return axios.get("http://192.168.166.170:3001/" + id).then(response => response.data)
  }

  return { fetchUser, fetchUserById }
}

export default fetchData
