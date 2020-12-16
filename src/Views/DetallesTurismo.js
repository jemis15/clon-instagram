import React, {useState} from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import img_noticia from '../assets/images/web/obras.jfif';

export default function DetallesTurismo(){
    const style={
        overflow:'hidden',
        width:'100%',
        height:'100%',
        border: '2px solid var(--green-800)',
        padding: '2px'
    }
    const [turismo, setTurismo] = useState({
        nombre:'Catarata Arcoiris',
        descripcion: 'a selva peruana  está poblada de magia, encanto y los más bellos escenarios naturales. Uno de los inolvidables e imperdibles escenarios naturales de aquella es la Cascada Arco Iris de Llaylla, que se ubica en el distrito de Llaylla, en la provincia de Satipo, en la región de Junín. La cascada recibe el nombre de Arco Iris, a causa de la constante aparición de este fenómeno natural en el lugar, en especial durante el verano.',
        ubicacion: 'cerca de Puerto Ocopa, Satipo 064 Perú',
        referencia: ' camino hacia puerto Ocopa ........'
    })
    return <div className="container-sm border my-3" >
    <h1 className="text-center my-3">{turismo.nombre}</h1>
    <label>{turismo.descripcion} </label>
        <label><b >Ubicación:</b> <span >{turismo.ubicacion}</span></label>
        <h4>Como llegar: </h4>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16077.83428651678!2d-74.46171780622133!3d-11.299820099643863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910b962defd345c9%3A0xa6cd3214c5c2c826!2sCatarata%20Arco%20Iris!5e1!3m2!1ses-419!2spe!4v1608032722574!5m2!1ses-419!2spe" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" ariaHidden="false" tabindex="0"></iframe>
        </div>
        <div className="contenidoImagenes mt-3" 
        style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gridGap: '1rem'
            }}>
                <div className="CajaTurismo shadow position-relative"  >
                    <img  src={img_noticia} className="img_restaurante  " style={style} />
                </div>
                <div className="CajaTurismo shadow position-relative"  >
                    <img  src={img_noticia} className="img_restaurante  " style={style} />
                </div>
                <div className="CajaTurismo shadow position-relative"  >
                    <img  src={img_noticia} className="img_restaurante  " style={style} />
                </div>
                
        </div>
        <div className="tablaOperadores mt-4">
            <h4>Operadores Turisticos: </h4>
            <Table  className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <th>RUC</th>
                    <th>Razon Social</th>
                    <th>Encargado</th>
                    <th>Email</th>
                    <th>Celular</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>fdgdg</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>ajadhnijd</td>
                    </tr>
                    <tr>
                    <td>asdfsf</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>ushfui</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
}