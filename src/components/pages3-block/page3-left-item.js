import './main.scss'

const Page3Item = ({img, id, text1, text2}) => {
    console.log(img);
    return ( 
        <div className="page3-item">
            <div>{img}</div>
            <div className="page-item-right">
                <h4 className="item-text">{text1}</h4>
                <p className="item-mini-text">{text2}</p>
            </div>
        </div>
     );
}
 
export default Page3Item;
