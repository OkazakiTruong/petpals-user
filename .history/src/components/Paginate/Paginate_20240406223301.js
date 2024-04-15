"use client";
import React from "react";
import { Pagination } from "antd";

export const Paginate = () => {
  return <Pagination defaultCurrent={1} total={100} />;
};
