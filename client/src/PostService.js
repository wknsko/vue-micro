const axios = require('axios');
const url = 'http://localhost:5000/api/posts';

class PostService {
    static async getPosts() {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            console.log(err)
        }
    }

    static async insertPost(text) {
        try {
            return axios.post(url, {
                text
            });
        } catch (err) {
            console.log(err)
        }
    }
    static deletePost(id) {

        return axios.delete(`${url}/${id}`)

    }
}

export default PostService;