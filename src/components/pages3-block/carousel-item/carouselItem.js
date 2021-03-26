import './main.scss'

const CarouselItem = ({img, money, id}) => {
    return ( 
        <div className="carousel-item">
            <img src={img} alt="" className="carousel-img"/>
            <h2 className="carousel-money">{money}</h2>
        </div>
     );
}
 
export default CarouselItem;