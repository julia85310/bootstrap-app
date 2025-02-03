import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalExample(){
    return (<>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Viaja con nosotros
        </button>
        <div className="modal" id='exampleModal' tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Descarga SkyScanner</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Vuelos al mejor precio✈️🤑</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Visitar web</button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}