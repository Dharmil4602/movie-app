import React, { useRef } from "react";
import "./carousel.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadingImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

function Carousel(props) {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (direction) => {};
  const skeletonItem = () => {
    return (
        <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    )
  }
  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLefttNav arrow"
          onClick={() => navigation("right")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("left")}
        />
        {!props.loading ? (
          <div className="carouselItems">
            {props.data?.map((item) => {
              const poster = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div key={item.id} className="carouselItem">
                  <div className="posterBlock">
                    <Img src={poster} />
                    <CircleRating rating={item.vote_average.toFixed(1)}/>
                    <Genres data={item.genre_ids.slice(0,2)}/>
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skeletonItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}

export default Carousel;
