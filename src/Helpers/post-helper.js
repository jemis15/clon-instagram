import Axios from 'axios';

export async function publicar(post, user) {
    const {data: apiPost} = await Axios({
        method: 'post',
        url: '/apimuni/posts',
        params: post
    });

    return {...apiPost, user, images: []};
}