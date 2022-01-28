import React from "react";
import { Select, Typography, Roww, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = (simplified) => {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    count: simplified ? 8 : 50,
  });
  if (isFetching) return "Loading...";
  console.log(cryptoNews);
  return <div>News</div>;
};

export default News;
