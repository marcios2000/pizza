import React,{ Component} from 'react'
import Gallery from 'react-photo-gallery'


class Gallery1 extends Component {
    render() {
        return (
        <div>
            <div className='gallery'>
               
            </div>
            <Gallery photos={PHOTO_SET} />
        </div>
        )
    }
}


const PHOTO_SET = [{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza1.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza2.jpeg',
    width: 4,
    height: 3


},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza3.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza4.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza5.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza6.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza7.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza8.jpg',
    width: 4,
    height: 3


},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza9.jpeg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza10.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza11.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza12.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza13.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza14.jpg',
    width: 4,
    height: 3


},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza15.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza16.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza17.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza18.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza19.png',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza20.jpg',
    width: 4,
    height: 3


},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza21.jpeg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza22.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza23.jpg',
    width: 4,
    height: 3
},{
    src: 'https://pizzaplace2000.s3.us-east-2.amazonaws.com/pizza24.png',
    width: 4,
    height: 3
}

]
export default Gallery1;