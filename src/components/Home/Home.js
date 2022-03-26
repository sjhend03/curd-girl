import './Home.css'
import monona from '../../images/monona.jpg'
import barn from '../../images/barn.jpg'
import wilderness from '../../images/wilderness.jpg'
import eastwash from '../../images/eastwash.jpg'
import { SlideShow } from '../SlideShow/SlideShow'

const pics = [monona, barn, wilderness, eastwash]
export const Home = () => {


    return (
        <div className='home'>
            <div className='header'>
                <h1>Curd Girls</h1>
            </div>
            <SlideShow pictures={pics}/>
        </div>
    )
}