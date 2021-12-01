import React from 'react'
import {Card,CardBody,CardHeader, CardFooter} from "reactstrap"
import Proptypes  from  'prop-types';

const ImageCard = ({url,key}) => {
    return (
        <Card className="rounded mb-2"> 
            <CardHeader >
            <div>
                Image Profile
            </div>
             </CardHeader>
             <CardBody>
                 <div className='image'>
             <img className="rounded d-block" key={key} src={url} alt=""/>
             </div>
             </CardBody>
             <CardFooter>
                 <div>
                    Random Image 
                 </div>
             </CardFooter>
        </Card>
    )
}

ImageCard.propTypes = {
    url : Proptypes.string.isRequired,
    key : Proptypes.oneOfType([Proptypes.string,Proptypes.number]).isRequired,
}

export default ImageCard;
