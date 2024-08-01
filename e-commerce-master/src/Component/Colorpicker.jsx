import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DoneIcon from '@mui/icons-material/Done';






const Colorpicker = ({ data, cchangecolor }) => {



    const [firstcolor, ccolor] = useState(data[0])







    useEffect(() => {

        cchangecolor(firstcolor)

    }, [firstcolor])





    return (
        <Colorboxcontainer>
            <div> Pick color</div>
            <Colorboxes totalcolors={data.length}>

                {
                    data && data.map((e, i) => {

                        return (



                            <div key={i} className={e == firstcolor ? "colorbox active" : "colorbox"} onClick={() => ccolor(e)} style={{ backgroundColor: `${e}` }} >

                                {e == firstcolor ? <DoneIcon style={{ fontSize: "18px", opacity: "100%", color: "grey" }} /> : null}




                            </div>

                        )


                    })
                }

            </Colorboxes>


        </Colorboxcontainer>
    )
}


const Colorboxes = styled.div`
    
display: grid;
grid-template-columns: repeat(  ${({ totalcolors }) => totalcolors} , 30px);
margin-top: 10px;
`

const Colorboxcontainer = styled.div`
  
margin-top: 30px;

.colorbox{
width: 25px;
height: 25px;
border-radius: 70px;
overflow: hidden;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
}

.colorbox.active{
/* border: 2px solid #123026; */
opacity: 60%;
}


`




export { Colorpicker }
