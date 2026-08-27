import { CalendarCheck, MessageSquare, FilePenLine } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <CalendarCheck size={55} />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-700">10</h2>

            <p className="text-2xl text-gray-400">Blogs</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <MessageSquare size={55} />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-700">27</h2>

            <p className="text-2xl text-gray-400">Comments</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <FilePenLine size={55} />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-700">4</h2>

            <p className="text-2xl text-gray-400">Drafts</p>
          </div>
        </div>
      </div>
 
<div className="mt-10">
  <div className="flex items-center gap-4 mb-4">
    <FilePenLine size={40} />

    <h2 className="text-3xl font-semibold text-gray-600">
      Latest Blogs
    </h2>
  </div>

  <div className="bg-white rounded-xl shadow-sm overflow-hidden">


    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-4 bg-gray-50 text-lg font-semibold text-gray-600 border-b">
      <div>#</div>
      <div>BLOG TITLE</div>
      <div>ACTIONS</div>
    </div>

    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 border-b hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        1
      </div>

      <div className="text-lg text-gray-600">
        A detailed step by step guide to manage your lifestyle
      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>

    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 border-b hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        2
      </div>

      <div className="text-lg text-gray-600">
        How to create an effective startup roadmap or ideas
      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>

  
    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 border-b hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        3
      </div>

      <div className="text-lg text-gray-600">
        Learning new technology to boost your career in software
      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>

  
    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 border-b hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        4
      </div>

      <div className="text-lg text-gray-600">
        Tips for getting the most out of apps and software
      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>


    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 border-b hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        5
      </div>

      <div className="text-lg text-gray-600">
        Enhancing your skills and capturing memorable moments
      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>

    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        6
      </div>

      <div className="text-lg text-gray-600">
        Maximizing returns by minimizing resources in your startup
      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>
    <hr></hr>
      <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 border-b hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        7
      </div>

      <div className="text-lg text-gray-600">
Taxes on Luxury Houses      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>

    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 border-b hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        8
      </div>

      <div className="text-lg text-gray-600">
The New Way of Study      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>

  
    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 border-b hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        9
      </div>

      <div className="text-lg text-gray-600">
Importance of Tourism      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>

   
    <div className="grid grid-cols-[60px_1fr_150px] items-center px-6 py-5 border-b hover:bg-gray-50">
      <div className="text-lg font-semibold text-gray-600">
        10
      </div>

      <div className="text-lg text-gray-600">
AI best practices in healthcare      </div>

      <button className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 text-sm hover:bg-gray-50">
        Unpublish
      </button>
    </div>
    

  </div>
</div>
    </div>
    
  );
};

export default Dashboard;
