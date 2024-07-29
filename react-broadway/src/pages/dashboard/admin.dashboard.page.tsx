import { Card } from "flowbite-react";

const AdminDashboard = () => {
  return (
    <>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 ">
          <Card href="#" className=" cursor-auto hover:bg-green-700 max-w-sm bg-green-600">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
               Total Customers
              </h5>
              <p className=" text-white font-medium text-2xl dark:text-gray-400">
                1000
              </p>
            </Card>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 ">
          <Card href="#" className=" cursor-auto hover:bg-pink-700 max-w-sm bg-pink-600">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
               Total Customers
              </h5>
              <p className=" text-white font-medium text-2xl dark:text-gray-400">
                1000
              </p>
            </Card>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 ">
          <Card href="#" className=" cursor-auto hover:bg-cyan-700 max-w-sm bg-cyan-600">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
               Total Customers
              </h5>
              <p className=" text-white font-medium text-2xl dark:text-gray-400">
                1000
              </p>
            </Card>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 ">
          <Card href="#" className=" cursor-auto hover:bg-red-700 max-w-sm bg-red-600">
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
               Total Customers
              </h5>
              <p className=" text-white font-medium text-2xl dark:text-gray-400">
                1000
              </p>
            </Card>
          </div>
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
          5
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            6
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            7
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            8
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            9
          </div>
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
          10
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            11
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            12
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            13
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            14
          </div>
        </div>
     
    </>
  );
};

export default AdminDashboard;
