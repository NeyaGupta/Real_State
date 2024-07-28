import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Choose Your Perfect Package' subtitle='Select the ideal package that suits your needs and budget, with options ranging from Starter to Elite, and customize further.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
