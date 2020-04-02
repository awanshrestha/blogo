import React from 'react';

function NotFoundPage(){
    return (
        <div >
            <img src={require('../../assets/images/404-errrrr-page.jpg')} alt="" style = {{
                width:"100%"
            }}/>
            <p style={{textAlign:"center"}}>
            </p>
        </div>
    )
}

export default NotFoundPage;