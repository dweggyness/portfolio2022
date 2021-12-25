import React, {useState, useEffect, useRef} from 'react';

const styles = {
  cloudContainer: {
    transform: "translateZ(-180px) scale(2.8)",
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
}

const cloudImages = [
  'images/clouds/cloud1.png',
  'images/clouds/cloud2.png',
  'images/clouds/cloud3.png',
  'images/clouds/cloud4.png',
  'images/clouds/cloud5.png',
]

class Cloud {
  constructor(x, y, img, speed) {
    this.x = x;
    this.y = y; // in percentage, will be multiplied with window height
    this.img = img;
    this.speed = speed;
  }

  move() {
    this.x += this.speed;
  }

  isOutOfBounds() {
    return (this.x - 50 > window.innerWidth)
  }
}

export default function CloudsBG() {
  const [listOfClouds, setListOfClouds] = useState([]);

  const moveClouds = () => {
    let tempList = listOfClouds;
    tempList.forEach((cloud) => {
      if (cloud.isOutOfBounds()) {
        cloud.x = -100;
      } else {
        cloud.x += cloud.speed
      }
    })

    setListOfClouds([...tempList]);
  }

  useEffect(() => {
    setListOfClouds([
      new Cloud(-0.1 * window.innerWidth, 0.05, cloudImages[0], 1.1),
      new Cloud(0.2 * window.innerWidth, 0.1, cloudImages[2], 0.7),
      new Cloud(0.6 * window.innerWidth, 0.15, cloudImages[4], 1.1),
      new Cloud(0.78* window.innerWidth, 0.2, cloudImages[1], 1.1),
      new Cloud(-0.4 * window.innerWidth, 0.25, cloudImages[3], 0.7),
      new Cloud(0.3 * window.innerWidth, 0.3, cloudImages[4], 1.1),
      new Cloud(0.7 * window.innerWidth, 0.35, cloudImages[0], 1.1),
      new Cloud(-0.3 * window.innerWidth, 0.4, cloudImages[2], 1.1),
      new Cloud(0.3 * window.innerWidth, 0.45, cloudImages[1], 1.1),
      new Cloud(0.5 * window.innerWidth, 0.5, cloudImages[1], 0.7),
      new Cloud(-0.2 * window.innerWidth, 0.55, cloudImages[3], 1.1),
      new Cloud(0 * window.innerWidth, 0.6, cloudImages[4], 0.7),
      new Cloud(0.1 * window.innerWidth, 0.35, cloudImages[3], 1.1),
    ])
  }, [])

  useEffect(() => {
    let timer = setInterval(() => {
      moveClouds();
    }, 35);

    return () => {
      clearInterval(timer)
      timer = null;
    };
  }, [listOfClouds])

  return (
    <div style={styles.cloudContainer}>
      {listOfClouds.map((cloud, i) => {
        return <img src={cloud.img} key={i} style={{
          position: 'absolute',
          top: window ? window.innerHeight * cloud.y : 0,
          left: cloud.x,
          right: 0,
          bottom: 0,
        }} />
      })}
    </div>
  )
}

// const styles = {
//   canvasStyle: {
//     width: '100vw',
//     height: '100vh',
//     position: 'absolute',
//     pointerEvents: 'none',
//     zIndex: 9999,
//     top: 0,
//   }
// }

// const cloudImages = [
//   'images/clouds/cloud1.png',
//   'images/clouds/cloud2.png',
//   'images/clouds/cloud3.png',
//   'images/clouds/cloud4.png',
//   'images/clouds/cloud5.png',
// ]

// class Cloud {
//   constructor() {
//     this.x = -50;
//     this.y;
//     this.img;
//     this.speed;

//     this.y = Math.floor(Math.random() * window.innerHeight);
//     this.img = new Image();
//     this.img.src = cloudImages[Math.floor(Math.random() * cloudImages.length)];
//     this.speed = 1 + Math.floor(Math.random() * 1); // vary speed between 1-2
//   }

//   move() {
//     this.x += this.speed;
//   }

//   isOutOfBounds() {
//     return (this.x - 50 > window.innerWidth)
//   }
// }


// export default function CloudsBG() {
//   const canvasRef = useRef(null)
//   const [listOfClouds, setListOfClouds] = useState([]);

//   const drawClouds = () => {
//     // console.log(listOfClouds);
//     for (var i = listOfClouds.length - 1; i >= 0; i--) {
//       const cloud = listOfClouds[i];
//       if (cloud.isOutOfBounds()) {
//         removeCloudAtIndex(i);
//       } else {
//         const canvas = canvasRef.current
//         const ctx = canvas.getContext('2d')

//         console.log(listOfClouds);
//         cloud.move();
//         ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
//         ctx.drawImage(cloud.img, 50, 50);
//       }
//     }
//   }

//   const removeCloudAtIndex = (i) => {
//     const tempArr = listOfClouds;
//     tempArr.splice(i, 1);
//     setListOfClouds(tempArr);
//   }

//   const createCloud = () => {
//     setListOfClouds([...listOfClouds, new Cloud()])
//   }

//   useEffect(() => {
    
//     const canvas = canvasRef.current
//     const context = canvas.getContext('2d')

//     let createInterval = setInterval(() => {
//       console.log('test')
//       createCloud();
//     }, 4000);
//     let drawInterval = setInterval(() => {
//       console.log( window.innerWidth, window.innerHeight );
//       console.log('drawing');
//       drawClouds();
//     }, 30)


//     return () => {
//       clearInterval(createInterval)
//       clearInterval(drawInterval)
//     };
//   }, [listOfClouds])

//   return (
//     <canvas style={styles.canvasStyle} ref={canvasRef}/>
//   )
// }
