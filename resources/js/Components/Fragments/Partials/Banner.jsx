const Banner = ({banner}) => {
    return (
      <>
        <div className="carousel w-full rounded-lg shadow-lg">
          {banner.map((item, index) => (
            <div key={item.id} id={`slide${index + 1}`} className="carousel-item relative w-full">
              <img src={`img/${item.image}`} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                {index > 0 && (
                  <a href={`#slide${index}`} className="btn btn-circle">
                    ❮
                  </a>
                )}
                {index < banner.length - 1 && (
                  <a href={`#slide${index + 2}`} className="btn btn-circle">
                    ❯
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Banner;