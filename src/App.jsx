import { useState, useEffect } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((pervTime) => pervTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <h1>Counter : {count}</h1>;
}

function ScrollCheck() {
  const [scrolly, setScrolly] = useState(0);

  function scrollChekecking() {
    setScrolly(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollChekecking);

    return () => window.removeEventListener("scroll", scrollChekecking);
  }, []);

  return (
    <div className={scrolly < 100?'normal':'advance'}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        perspiciatis, eveniet autem eum repudiandae quos in fugit consequatur
        laboriosam nostrum!
      </p>
    </div>
  );
}
export { Counter, ScrollCheck };
