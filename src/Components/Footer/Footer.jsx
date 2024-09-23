import { Item } from "./Item";
import ig from "./IMG/ig.webp"
import fb from "./IMG/fb.png"
import wsp from "./IMG/wsp.webp"
import "./Footer.css"




export const Footer = () =>{
    return <>
        <div className="Footer" id="footer">
            <div className="Padding">
                <div className="Section">
                    <div className="Products">
                        
                        <h1 className="title">Products</h1>
                        <Item content={"Must Buy"}/>
                        <Item content={"Trending"}/>
                        <Item content={"On sale"}/>
                        
                    </div>

                    <div className="Information">
                         <h1 className="title">Information</h1>
                        <Item content={"Terms and conditions"} whereto={'/TermsAndConditions'}/>
                        <Item content={"Payment Methods"} whereto={'/PaymentMethods'}/>
                        <Item content={"Shipments"} whereto={'/Shipments'}/>

                    </div>

                    <div className="Aboutus">
                        <h1 className="title">About us</h1>
                        <Item content={"Argentina,Uruguay"}/>
                        <Item content={"Blackmarket"}/>
                        
                    </div>

                    <div className="Social">
                        <h1 className="title">Contacto</h1>
                        <a href="" className="w-10 ml-4 mt-2 md-4"><img  src={fb} alt="" /></a>
                        <a href="" className="w-10 ml-4 mt-2 md-4"><img src={ig} alt="" /></a>
                        <a href="" className="w-10 ml-4 mt-2 md-4"><img src={wsp} alt="" /></a>

                    </div>



                </div>
            </div>
        </div>

            <hr></hr>
             



             

    </>
   
}