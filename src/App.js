import React, {useEffect, useMemo, useState} from 'react';
import Counter from './components/Counter';
import ClassComponent from './components/ClassComponent';
import './styles/style.css';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './UI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './UI/MyModal/MyModal';
import { usePosts } from './components/hooks/usePosts';
import axios from 'axios'
import PostService from './API/PostService';
import Loader from './UI/Loader/Loader';
import { useFetching } from './components/hooks/useFetching';

function App() {
  const [posts, setPosts] = useState([])  
  const [filter, setFilter]= useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  useEffect(() => {
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(deletePost => deletePost.id !== post.id))
  }
  
  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Z</MyButton>
      <MyButton onClick={() => setModal(true)}>X</MyButton>
      <MyModal visible={modal} setVisible={setModal}>      
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostsLoading
      ? <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
      : <PostList posts={sortedAndSearchedPosts} remove={removePost}/>}
    </div>
  );
}

export default App;