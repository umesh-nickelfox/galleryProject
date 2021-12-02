import React from 'react'
import { Card, CardBody, CardHeader, CardFooter } from "reactstrap"

const ImageCard = ({ url }) => {
    return (
        <Card className="rounded mb-2">
            <CardHeader >
                <div>
                    Image Profile
                </div>
            </CardHeader>
            <CardBody>
                <div className='image'>
                    <img className="rounded d-block" src={url} alt="" />
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



export default ImageCard;
