import { useState } from "react"

function UserSummary(props) {
    const [showMore, setShowMore] = useState(false);

    function handleShowMore(event){
        setShowMore(!showMore)
        showMore? event.target.innerHTML = 'show more' :  event.target.innerHTML = 'show less';
    }
    console.log(showMore)


  return (
    <div className="container">

        {  typeof props.userData !== 'undefined' ?

        <div className='user'>
            <div className='descriptionBox'>
                <li className="description">first name:   </li>
                <li className="description">last name: </li>
                {   showMore ? 
                    <div>
                        <li className="description">gender: </li>
                        <li className="description">email:</li>
                        <li className="description">phone:</li>
                        <li className="description">address:</li>
                        <li>&nbsp; &nbsp;</li>
                    </div>
                    : ''  
                }
            </div>
            <div className='dataBox'>
                <li><span className="data">{props.userData.name.first} </span> </li>
                <li><span className="data">{props.userData.name.last} </span> </li>
                {
                   showMore ? 
                   <div>
                        <li><span className="data">{props.userData.gender} </span> </li>
                        <li><span className="data">{props.userData.email} </span> </li>
                        <li><span className="data">{props.userData.phone} </span> </li>
                        <li><span className="data">{props.userData.location.street.number} {props.userData.location.street.name}</span> </li>
                        <li><span className="data">{props.userData.location.state}, {props.userData.location.country} </span> </li>
                   </div>
                   : ''
                }
                <li> <div className="buttonBox"> <button  className="showButton" onClick={(e)=> handleShowMore(e) } >Show more</button> </div> </li>
            </div>
            <div className='imageBox'>
                {   showMore ?
                    <div>
                        <img  src={props.userData.picture.large}/>
                    </div>
                    : ''
                }
            </div>

        </div>   
        : 
        <p>No Data</p> 
        }

    </div>
  )
}

export default UserSummary