import './pages.scss'

const PageTop = ({text1, text2}) => {
    return (
        <div className="page">
            <div className="page-top">
                <div className="page1-left">
                    <h1 className="big-text">{text1}</h1>
                    <p className="small-text">{text2}</p>
                </div>
                <input
                    type="text"
                    className="page1-input"
                    placeholder="Search for food, coffe, etc.."
                />
            </div>
        </div>
    );
}

export default PageTop;