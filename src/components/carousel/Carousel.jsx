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

  const navigation = (direction) => {
    const container = carouselContainer.current;
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const skeletonItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="carousel">
      <ContentWrapper>
        {props.title && <div className="carouselTitle">{props.title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
        {!props.loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {props.data?.map((item) => {
              const poster = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div key={item.id} className="carouselItem" onClick={() => navigate(`/${item.media_type || props.endPoint}/${item.id}`)}>
                  <div className="posterBlock">
                    <Img src={poster} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
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
          <div className="loadingSkeleton">{skeletonItem()}</div>
        )}
      </ContentWrapper>
    </div>
  );
}

export default Carousel;
