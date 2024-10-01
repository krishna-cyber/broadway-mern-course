import  { ReactElement } from 'react'
import { FaBook,  FaFootballBall, FaMusic } from 'react-icons/fa';
import { GrSupport } from 'react-icons/gr';
import { HiArrowRight,  HiComputerDesktop, HiLightBulb, HiMiniBookmarkSlash,  HiTv } from 'react-icons/hi2';
import { Link } from 'react-router-dom'
import { useFetchCategoryList } from '../../services/queries/queries';


interface category{
    title: string;
    icon: ReactElement;
    link: string;
}

const CategoryMenu = () => {
    const {data,isLoading,isError} = useFetchCategoryList();

    
    
    

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shop by category</h2>

    </div>

    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.result && data?.result.map((category, index) => (
            <Link key={index} to={category.link} className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={`http://localhost:3000/${category.image}`} alt="" className="w-6 h-6 object-cover" />
                <span className="text-sm ml-3 font-medium text-gray-900 dark:text-white">{category.name}</span>
            </Link>
        ))}
      
    </div>
  </div>
</section>
  )
}

export default CategoryMenu