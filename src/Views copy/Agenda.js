import React from 'react';

export default function Agenda (){
//     const date = new Date();
//     //const mes =date.getMonth();
//     const mesDia = document.querySelector("dia");
//     const mes = [
//         "Enero",
//         "Febrero",
//         "Marzo",
//         "Abril",
//         "Mayo",
//         "Junio",
//         "Julio",
//         "Agosto",
//         "Setiembre",
//         "Octubre",
//         "Noviembre",
//         "Diciembre",
//     ];

//     document.querySelector(".date h1").innerHTML = mes[date.getMonth()];
// document.querySelector(".date p").innerHTML = date.toDateString();
// let dia ="0";
// for(let i = 1; i<= 31; i++){
//     dia +='<div>${i} </div>';
//     mesDia.innerHTML =dia; 
// }
    
    return <div className="container agenda">
        <div className="Calendario">
            <div className="mes">
            <i className="fas fa-angle-left prev"></i> 
            <div className="date">
                <h1>Diciembre</h1>
                <p>Viernes, 4 Diciembre 2020</p>
            </div>
            <i className="fas fa-angle-right next"></i>
            </div>
            <div className="semana">
                <div >Do</div>
                <div >Lu</div>
                <div >Ma</div>
                <div >Mi</div>
                <div >Ju</div>
                <div >Vi</div>
                <div >Sa</div>
            </div>
            <div className="dia">
                <div className="prev-date">26</div>
                <div className="prev-date">27</div>
                <div className="prev-date">28</div>
                <div className="prev-date">29</div>
                <div className="prev-date">30</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
                <div>21</div>
                <div>22</div>
                <div>23</div>
                <div>24</div>
                <div>25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div className="today">29</div>
                <div>30</div>
                <div>31</div>
                <div className="next-date">1</div>
                <div className="next-date">2</div>
                <div className="next-date">3</div>
                <div className="next-date">4</div>
                <div className="next-date">5</div>
                <div className="next-date">6</div>
            </div>
        </div>
    </div>
}