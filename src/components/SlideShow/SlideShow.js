import React, { useState, useEffect, useRef } from "react";
import './SlideShow.css'

const delay = 5000;

export const SlideShow = ({ pictures }) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null)
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
              setIndex((prevIndex) =>
                prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
              ),
            delay
        )
        return () => {
            resetTimeout();
        }
    }, [index])
    return (
            <div className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {pictures.map((backgroundColor, index) => (
                    <img className="slide" key={index} src={pictures[index]}/>
                    ))}
                </div>
            </div>
    )
}