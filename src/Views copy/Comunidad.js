import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Markers from '../components/Markers';
import Post from '../components/Post';
import Posts from '../components/Posts';

export default function Comunidad({ user }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUsers() {
            try {
                setLoading(true);
                const { data: apiPosts } = await Axios.get(`/apimuni/posts/public`);
                setPosts(apiPosts);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        loadUsers();
    });

    return <Row className="py-xl justify-content-between px-3" noGutters>
        <Col className="content-markers">
            <div className="sticky-from-header-30">
                <Markers grupo="primario" className="border-bottom pb-3" />
                <h5 className="px-3">Plataformas</h5>
                <Markers grupo="plataforma" />
            </div>
        </Col>
        <Col className="content-posts">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </Col>
        <Col className="content-markers">
            <div className="sticky-from-header-30">
                <Markers grupo="primario" />
            </div>
        </Col>
    </Row>
}