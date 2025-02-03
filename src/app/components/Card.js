import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({imgSrc, altSrc, title, text, button}){
    return (
    <div className="card" style={{ width: '18rem' }}>
        <img src={imgSrc} className="card-img-top" alt={altSrc}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">{button}</a>
        </div>
    </div> 
    );
}