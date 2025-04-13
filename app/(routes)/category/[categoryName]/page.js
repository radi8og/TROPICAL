import CategoryList from '@/app/_component/CategoryList'
import ProductList from '@/app/_component/ProductList'
import React from 'react'

function page({params}) {
  return (
    <div>
      
    <CategoryList selected={params.categoryName} />
    <div className="text-green-700 font-bold text-4xl mb-4 pl-170 pt-5">{params.categoryName}</div>
    <ProductList selectedCat={params.categoryName} />
    </div>
  )
}

export default page