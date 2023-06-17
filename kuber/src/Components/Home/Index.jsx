import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Index"


const Index = () => {
  const [data,setData]=useState("")
  const [womendata,setWomenData]=useState("")

  const getData = async () => {
    let res = await axios.get("https://koovs-api.vercel.app/koovs-men");
    let data=await res.data
    // console.log(data);
    setData(data)
  };
  useEffect(() => {
    getData();
  }, []);
  
  const getWomenData = async () => {
    let res = await axios.get("https://koovs-api.vercel.app/koovs-women");
    let womendata=await res.data
    // console.log(data);
    setWomenData(womendata)
  };
  useEffect(() => {
    getWomenData();
  }, []);

  //  console.log(data)
  return (
    <div>
      <SimpleGrid m="auto" w="95%" gap={5} columns={[1, 2, 3, 4]}  >
        {data&&data.map((el)=>(
          <Card   {...el} />
        ))}
      </SimpleGrid>
      <SimpleGrid columns={[1,2,3,4]} m="auto" w="95%" >
        {womendata&&womendata.map((el)=>(
          <Card   {...el} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Index;
