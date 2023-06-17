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
      <SimpleGrid Columns={[1,2,3]}  >
        {data&&data.map((el)=>(
          <Card   {...el} />
        ))}
      </SimpleGrid>
      <SimpleGrid Columns={[1,2,3]}  >
        {womendata&&womendata.map((el)=>(
          <Card   {...el} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Index;
