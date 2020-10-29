import axios from 'axios'

export async function fetchQuestions(amount, category, difficulty, token, type) {
    const { data } = await axios.get('api.php',
        { params: { amount, category, difficulty, type, token } })
    return data;
}

export async function fetchCategories() {
    const { data } = await axios.get('api_category.php')
    return data;
}
