export default function Work() {
    return (
      <div className="bg-[#A6B37D] h-screen">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h1 className="text-3xl font-bold text-center text-black mb-4">
            My Work
          </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className=" bg-[#B0EBB4] hover:bg-[#86AB89] shadow-md p-4 rounded">
              <h2 className="text-2xl font-bold mb-2">Project 1</h2>
              <p className="text-black">This is my Project 1.</p>
            </div>
  
        <div className="bg-[#B0EBB4] hover:bg-[#86AB89] shadow-md p-4 rounded">
              <h2 className="text-2xl font-bold mb-2">Project 2</h2>
              <p className="text-black">This is my project 2.</p>
            </div>
  
        <div className="bg-[#B0EBB4] hover:bg-[#86AB89] shadow-md p-4 rounded">
              <h2 className="text-2xl font-bold mb-2">Project 3</h2>
              <p className="text-black">This is my proect 3.</p>
            </div>
  
        <div className="bg-[#B0EBB4] hover:bg-[#86AB89] shadow-md p-4 rounded">
              <h2 className="text-2xl font-bold mb-2">Project 4</h2>
              <p className="text-black">This is my project 4.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  