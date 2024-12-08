import React, { useEffect, useState } from 'react';
import "../css/CardSection.css";
import Card from './Card';
import CardData from "./CardData.json"

const CardSection = ({ activeCategory, input, itemData }) => {
  const [carddata, setcarddata] = useState(CardData);
  
  console.log("Before filtering : ", carddata);
  console.log("Before any operation : ", itemData)
  useEffect(() => {
    if (itemData) {
      setcarddata((prevData) => [...prevData, itemData]);
    }
  }, [itemData]);



  console.log(carddata,'??????????')

  console.log("category in carSection page ", activeCategory)
  console.log("Input data in cardSection Page :", input)
  console.log("Empty data here :", carddata[13]?.category)

  if (carddata[12]?.category === 'undefined') {
    console.log("Yaha mil raha hai")
  }

  const filteredCardData = carddata.filter(
    (item) => item && item.name && item.img && item.price && item.category
  );

  const getFiltered = () => {
    if (activeCategory === 'All') {
      return filteredCardData;
    }
    return filteredCardData.filter((item) => item.category === activeCategory);
  };

  const filteredData = getFiltered();

  console.log(filteredData)
  console.log(input.length > 0)


  const inputFiltering = CardData.filter((item) => {
    return item.name.toLowerCase().includes(input.toLowerCase())
  })

  // console.log(inputFiltering)

  // console.log("Card data -", carddata)
  // console.log("Itemdata -", itemData)


  return (
    <div className="card-section">
      <div className="card-section-container">
        {input.length > 0 ?
          inputFiltering.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              img={item.img}
              price={item.price}
              description={item.description}
            />
          )) :
          filteredData.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              img={item.img}
              price={item.price}
              description={item.description}
            />
          ))
        }

      </div>
    </div>
  );
};

export default CardSection;