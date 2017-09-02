import React, { Component } from 'react'

export default class SitterInfo extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return(
      <div className="col-xs-12 section-row">
            <span className="section-title">Sobre mis servicios:</span>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <ul id="table">
                  <li className="title">Cuido</li>
                  <li className="color"><span className="table-text">Perros:</span><span className="table-number">Sí</span></li>
                  <li><span className="table-text">Gatos:</span><span className="table-number">No</span></li>
                  <li className="title color">Extras</li>
                  <li><span className="table-text">Supervisión 24/7:</span><span className="table-number">Sí</span></li>
                  <li className="color"><span className="table-text">Auto para emergencias:</span><span className="table-number">Sí</span></li>
                  <li><span className="table-text">Cuidador Fumador:</span><span className="table-number">No</span></li>
                  <li className="color"><span className="table-text">Caminatas diarias:</span><span className="table-number">Sí</span></li>
                  <li><span className="table-text">Recoger y entregar a domicilio incluido:</span><span className="table-number">No</span></li>
                  <li className="color"><span className="table-text">Envío de fotos por día:</span><span className="table-number">Sí</span></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6">
                <ul id="table">
                    <li className="title">Propiedad</li>
                    <li className="color"><span className="table-text">Tipo de propiedad:</span><span className="table-number">
                        Departamento                    </span></li>
                    <li><span className="table-text">Tiene espacio libre:</span><span className="table-number">
                        Sí                    </span></li>
                    <li className="color"><span className="table-text">Perros residentes:</span><span className="table-number">
                        Sí                    </span></li>
                    <li><span className="table-text">Mascotas pueden subirse a muebles:</span><span className="table-number">
                        Sí                    </span></li>
                    <li className="color"><span className="table-text">Mascotas pueden subirse a camas: </span><span className="table-number">
                        Sí                    </span></li>
                    <li><span className="table-text">Hay menores en la vivienda: </span><span className="table-number">
                        No                    </span></li>
                    <li className="title color">Habilidades </li>
                    <li><span className="table-text">Administración de inyecciones:</span><span className="table-number">
                        No                    </span></li>
                    <li className="color"><span className="table-text">Administración de medicinas:</span><span className="table-number">
                        Sí                    </span></li>
                    <li><span className="table-text">Años cuidando mascotas:</span><span className="table-number">
                        4                    </span></li>
                </ul>
              </div>
            </div>
          </div>
      )
  }
}