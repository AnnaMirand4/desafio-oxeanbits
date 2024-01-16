import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Grid , GridColumn} from '@progress/kendo-react-grid'


const Tabela = () => {
    const [post, setPost] = useState([]);

    useEffect (() => {
        const getPost = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
                setPost(response.data)
                
            } catch (error) {
                console.error('erro ao obter os posts', error)
            }
        }
        
        getPost()
    }, []);
    
      return (
        <div>
            
            <Grid data={post} style={{ height: 450 }} scrollable='scrollable' mobile={true}>
            
                <GridColumn field="id" title="ID" width={100} media="(min-width:400px)" />
                <GridColumn field="name" title="Título" width={250} media="(min-width:400px)" />
                <GridColumn field="email" title="Email" width={250} media="(min-width:400px)" />
                <GridColumn field='body' title='Conteúdo' width={250} media="(min-width:600px)" />
            </Grid>
        </div>
      )
}

export default Tabela