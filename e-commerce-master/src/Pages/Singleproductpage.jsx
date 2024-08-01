import React, { useEffect } from "react";
import { useParams } from "react-router";
import { fetchSingleProduct } from "../redux/singleproductdata";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import Addtocartbutton from "../Component/Addtocartbutton";
import { Colorpicker } from "../Component/Colorpicker";
import { addtocart } from "../redux/cartstore";
import Counter from "../Component/Counter";
import FormatPrice from "../Component/FormatPrice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Singleproductpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleproductdata, isloading } = useSelector((state) => state.single);
  const [photoindexnum, pphotoindexnum] = useState(0);
  const [currentstock, sstate] = useState(1);
  const [selectedcolor, cchangecolor] = useState("");

  // {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}

  // {{{{{{{{{{{{{{{}}}}}}}}}}}}}}}

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  // {{{{{{{{{{{{{{{{{{{{{{{change main photo by click }}}}}}}}}}}}}}}}}}}}}}}

  const changeindex = (i) => {
    pphotoindexnum(i);
  };

  // {{{{{{{{{{{{{{{{{{{{{{{{{{current stock functions}}}}}}}}}}}}}}}}}}}}}}}}}}

  const add = () => {
    if (currentstock === singleproductdata.stock) {
      const notify = () => toast.warn("You reach MAX limit");

      notify();
    } else {
      sstate(currentstock + 1);
    }
  };

  const sub = () => {
    if (currentstock === 1) {
      return;
    } else {
      sstate(currentstock - 1);
    }
  };

  // console.log(selectedcolor)

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  if (isloading) {
    return (
      <Loadingspinner>
        {" "}
        <img src="/images/loading.svg" alt="" />{" "}
      </Loadingspinner>
    );
  }

  return (
    <Wrapper>
      <Columnone>
        <Mainproductphoto>
          <img
            src={
              singleproductdata.image &&
              singleproductdata.image[photoindexnum].url
            }
            alt=""
          />
        </Mainproductphoto>
      </Columnone>

      <Columntwo>
        <div className="productname">{singleproductdata.name} </div>

        <div className="productprize">
          Prize : <FormatPrice price={singleproductdata.price} />{" "}
        </div>
        <div className="productcom">Company : {singleproductdata.company}</div>
        <div className="productdes"> {singleproductdata.description} </div>
        <div
          style={
            singleproductdata.stock > 0 ? { color: "green" } : { color: "red" }
          }
          className="productstock"
        >
          {singleproductdata.stock > 0 ? "Stock availiable" : "not availaible"}
        </div>
        <Counter margintop={"25px"} state={currentstock} add={add} sub={sub} />

        <Colorpicker
          cchangecolor={cchangecolor}
          data={singleproductdata.colors}
        />

        <Allphotocontainer>
          {singleproductdata.image &&
            singleproductdata.image.map((e, i) => {
              return (
                <img
                  key={i}
                  style={{ cursor: "pointer" }}
                  onMouseOver={() => {
                    changeindex(i);
                  }}
                  src={e.url}
                  alt="aa"
                />
              );
            })}
        </Allphotocontainer>

        <Addtocartbutton
          add={() => {
            dispatch(
              addtocart({ singleproductdata, selectedcolor, currentstock })
            );
          }}
        />
      </Columntwo>
    </Wrapper>
  );
};

// {{{{{{{loading css}}}}}}}

const Loadingspinner = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  grid-template-rows: 600px;
  max-width: 1700px;

  @media (max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Columnone = styled.div`
  /* border: 1px solid red; */

  /* display: flex;
align-items: center; */
  @media (max-width: 800px) {
  }
`;

const Columntwo = styled.div`
  /* border: 1px solid black; */
  padding-left: 50px;

  @media (max-width: 900px) {
    padding-left: 0px;
  }

  .productname {
    font-size: 30px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;

    @media (max-width: 800px) {
      margin-top: 30px;
    }
  }

  .productprize {
    margin-top: 10px;
    font-size: 17px;
  }

  .productstock {
    margin-top: 30px;
    font-size: 17px;

    @media (max-width: 800px) {
      margin-top: 10px;
    }
  }

  .productdes {
    line-height: 23px;
    max-width: 90%;
    font-size: 15px;
    margin-top: 20px;
    font-weight: 500;
    color: #828282;

    @media (max-width: 800px) {
      max-width: 90%;
      font-size: 12px;
      margin-top: 10px;
    }
  }

  .productcom {
    margin-top: 10px;
    font-size: 17px;
  }
`;

const Mainproductphoto = styled.div`

  img {
    border-radius: 11px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const Allphotocontainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, 100px);
  grid-gap: 5px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(4, 70px);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Singleproductpage;
