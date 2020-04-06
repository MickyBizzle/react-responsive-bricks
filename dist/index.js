function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import PropTypes from "prop-types";

function getWidth() {
  return document.documentElement.clientWidth;
}

const Brick = props => {
  const {
    imgSrc,
    gap,
    colWidth
  } = props;
  const [imgHeight, setImgHeight] = useState(10);
  const [hovering, setHovering] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const itemRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    if (imgLoaded === true) {
      window.dispatchEvent(new Event("resize"));
      const ratio = imgRef.current.naturalWidth / colWidth;
      setImgHeight(imgRef.current.naturalHeight / ratio);
    }
  }, [imgLoaded, colWidth]);

  const handleHover = () => {
    setHovering(!hovering);
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: itemRef,
    className: `brick${hovering ? " hovering" : ""}`,
    onMouseEnter: handleHover,
    onMouseLeave: handleHover,
    style: {
      width: `${colWidth - gap}px`,
      height: `${imgHeight}px`,
      marginBottom: `${gap}px`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    alt: "",
    ref: imgRef,
    onLoad: () => setImgLoaded(true),
    width: colWidth - gap,
    height: imgHeight
  }));
};

export const Bricks = props => {
  const {
    data,
    columns = 4,
    gap = 0,
    minWidth = 200,
    backgroundColor = "white"
  } = props;
  const [layoutWidth, setLayoutWidth] = useState(getWidth);
  const [colWidth, setColWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setLayoutWidth(getWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const minColumns = Math.floor(layoutWidth / minWidth);
    minColumns < columns ? setColWidth(Math.ceil(layoutWidth / minColumns)) : setColWidth(Math.ceil(layoutWidth / columns));
  }, [layoutWidth, columns, minWidth]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bricksContainer",
    style: {
      backgroundColor: backgroundColor,
      columns: `${columns} ${minWidth}px`,
      columnGap: `${gap}px`
    }
  }, data && data.map((item, i) => /*#__PURE__*/React.createElement(Brick, _extends({
    key: i
  }, item, {
    gap: gap,
    colWidth: colWidth
  }))));
};
Bricks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    imgSrc: PropTypes.string
  })).isRequired,
  columns: PropTypes.number,
  gap: PropTypes.number,
  minWidth: PropTypes.number,
  backgroundColor: PropTypes.string
};