import React from "react";

function Food({name, picture}) {
  return (
    <div>
    <h2> I like {name} </h2>
    <img src={picture}/>
    </div>
    );
}

const foodILike = [{
  name : "mandu",
  image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_92%2Fjjse823_1455685526450Opiqu_JPEG%2F0217%25B8%25B8%25B5%25CE%25B6%25FB%25C0%25DC%25C4%25A1%25B1%25B9%25BC%25F6_%25281%2529.jpg&type=sc960_832"
},
{
  name : "hamburger",
  image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F469%2F2017%2F07%2F06%2F0000215313_001_20170709221652510.jpg&type=sc960_832"
},
{
  name : "pizza",
  image : "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191122_1%2F1574384492602VKnvl_JPEG%2FfQ8ikjUdXASj4sg0Dh9dzzlD.jpg&type=sc960_832"
},
{
  name : "chichen",
  image : "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190503_215%2F15568679561827552m_JPEG%2Fd8kJq7nkdEeKSaz5T1znHjhE.jpeg.jpg&type=sc960_832"
}
]

function App() {
  return ( 
    <div>
       {foodILike.map(dish => (
       <Food name={dish.name}
             picture={dish.image}/>)
       )}
      
    </div>
  );
}

export default App;
