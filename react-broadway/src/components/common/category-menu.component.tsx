import { Card } from 'flowbite-react'
import React, { ReactElement } from 'react'
import { FaBook, FaBookOpen, FaFootballBall, FaMusic, FaReadme } from 'react-icons/fa';
import { GrSupport } from 'react-icons/gr';
import { HiBookOpen, HiComputerDesktop, HiLightBulb, HiMiniBookmarkSlash, HiShoppingBag, HiTv } from 'react-icons/hi2';
import { Link } from 'react-router-dom'


interface category{
    title: string;
    icon: ReactElement;
    link: string;
}

const CategoryMenu = () => {
    const categories :category[]=   [
        {
            title: 'Books',
            icon: <FaBook className=' h-4 w-4 mr-2'/>,
            link: '/category/books'
        },
        {
            title: 'Fashion/Clothes',
            icon: <HiMiniBookmarkSlash className=' h-4 w-4 mr-2'/>,
            link: '/category/fashion'
        },
        {
            title: 'Sports &amp; Outdoors',
            icon: <FaFootballBall className=' h-4 w-4 mr-2'/>,
            link: '/category/sports'
        },
        {
            title: 'Music',
            icon: <FaMusic className=' h-4 w-4 mr-2'/>,
            link: '/category/music'
        },
        {
            title: 'Health &amp; beauty',
            icon: <GrSupport className=' h-4 w-4 mr-2'/>,
            link: '/category/health'
        },
        {
            title: 'Electronics',
            icon: <HiLightBulb className=' h-4 w-4 mr-2'/>,
            link: '/category/electronics'
        },
        {
            title: 'Computer &amp; Office',
            icon: <HiComputerDesktop className=' h-4 w-4 mr-2'/>,
            link: '/category/computer'
        },
        {
            title: 'TV/Projectors',
            icon: <HiTv className=' h-4 w-4 mr-2'/>,
            link: '/category/tv'
        }
    ];
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shop by category</h2>

      <Link to="#" title="" className="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
        See more categories
        <svg className="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
        </svg>
     </Link>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories && categories.map((category, index) => (
            <Link key={index} to={category.link} className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                {category.icon}
                <span className="text-sm font-medium text-gray-900 dark:text-white">{category.title}</span>
            </Link>
        ))}
      
    </div>
  </div>
</section>
  )
}

export default CategoryMenu