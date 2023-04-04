import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllTrending } from '@/redux/features/slices'

const Hero = () => {
    const dispatch = useDispatch();
    const { trending } = useSelector(({movies }) => movies)
    console.log("TRENDING ", trending)

    useEffect(() =>{
        dispatch(getAllTrending());
    },[]);
  return (
    <div>Hero</div>
  )
}

export default Hero