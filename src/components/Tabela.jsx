import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Grid , GridColumn} from '@progress/kendo-react-grid'

const Tabela = () => {
    const [post, setPost] = useState([]);

    useEffect (() => {
        const getPost = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPost(response.data)
                
            } catch (error) {
                console.error('erro ao obter os posts', error)
            }
        }
        
        getPost()
    }, []);
    
      return (
        <div>
            <h1>Tabela de Posts</h1>
            <Grid data={post} style={{ height: 540 }}>
                <GridColumn field="id" title="ID" />
                <GridColumn field="title" title="Post"/>
            </Grid>
        </div>
      )
}

export default Tabela