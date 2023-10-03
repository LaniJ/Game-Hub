import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '68a8983046ef4e89b81152120b9ca083'
  }
})

