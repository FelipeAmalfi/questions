import axios from 'axios'

export async function fetchToken() {
    const { data } = await axios.get('api_token.php?command=request')
    return data;
}