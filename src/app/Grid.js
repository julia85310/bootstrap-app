import 'bootstrap/dist/css/bootstrap.min.css';


export default function Grid(){
    return <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'></div>
            <div className='col-md-4'></div>
        </div>
        <div className='row'>
            <div className='col-md-8'></div>
            <div className='col-md-4'></div>
        </div>
    </div>
}

/*Para que las columnas sean más pequeñas en pantallas grandes (lg)
añadir col-lg-(lo que deseemos que ocupe) y a la vez
ocupen todo el ancho en pantallas pequeñas (sm) añadir también col-sm-12:
className='col-sm-12 col-md-4 col-lg-2(ej)'*/