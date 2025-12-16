import './bentogrid.css'
import AstroCard from './AstroCard'
import ServiceMarquee from './ServiceMarquee'
import { Globe } from '../components/ui/globe'
import AboutMe from './AboutMe'
import AvailableForWork from './AvailableForWork'


export default function BentoGrid(){
   
   return<>
  
 

   <div className="parent">
    <div className="div1"><AstroCard/></div>
    <div className="div2"><ServiceMarquee/> </div>
    <div className="div3"> <Globe/> <AvailableForWork/></div>
    <div className="div4"> <AboutMe/></div>
    </div>
   </>
   
    
}