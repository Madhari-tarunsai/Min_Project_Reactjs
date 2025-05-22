import React from 'react'
// import axios from 'axios'
import Recipe from './Recipe'
import './Recipe.css'

const Menu = ({data}) => {
    // const [Recipes,setRecipes]=useState([])

    // useEffect(()=>{
    //     axios.get('https://dummyjson.com/recipes').then(res=>{
    //         console.log(res.data.recipes)
    //         setRecipes(res.data.recipes)
    //     })

    // },[])
  return (
    <div className='ReacipesContainer'><h1>Recipes</h1>
    <div id='allRecipesHolder' style={{backgroundColor:'black'}}>
        {
        data.map((x)=>{
            return(
                <Recipe singleItem={x}/>
                
            )
        })
    }
    </div>

    </div>
  )
}

export default Menu