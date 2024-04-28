import React, {useState, useEffect} from 'react'
import Cards from './Cards';
import Loader from './Loader';
import FormField from './FormField';


const Community = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null);
  const [searchText, setsearchText] = useState('')
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);
  
  const RenderCards =({data, title})=>{
    if (data?.length > 0) {

      return (data.map((post)=> <Cards key={post._id} {...post}/>));
    }
    return(
      <h1 className='mt-5 font-bold text-black text-xl uppercase'>{title}</h1>
    );
  };

  useEffect(()=>{
    const fetchPost = async()=>{
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5300/api/get-results',{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        },
      })
      if (response.ok) {
        const result = await response.json();

        console.log(result)

        setAllPost(result);
      }
      } catch (error) {
        alert(error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchPost();
  },[]);
  const handleSearchChange = (e)=>{
    clearTimeout(searchTimeout);

    setsearchText(e.target.value);

    setSearchTimeout(
    setTimeout(()=>{
      const searchResult = allPost.filter((item)=> 
        item.localName.toLowerCase().includes(searchText.toLowerCase()) )
        // console.log(searchText)
      
        console.log(searchResult)
      
        setSearchedResults(searchResult);
    
      
    },500))
  }
  return (
   <section className='w-[60%] mx-auto flex flex-col h-auto mb-4  -mt-8 text-left bg-white'>
    <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'>
        The Community Posts
      </h1>
      <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
        Here are the images predicted by the model with accuracy
      </p>
    </div>

    <div className='mt-8'>
      <FormField
        labelName="Search Posts"
        type="text"
        name="text"
        placeholder="Enter the name to search the post"
        value={searchText}
        handleChange={handleSearchChange}
      />
    </div>

    <div className='mt-10'>
        {loading ? ( 
          <div className='flext justify-center'>
            <Loader/>
          </div>
        ) :(
          <>
            {searchText && (
              <h1 className='font-medium text-black text-xl mb-3'>
                Showing result for <span className='text-[#222328] font-bold'>'{searchText}'</span>
              </h1>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards 
                  data={searchedResults}
                  title="no result found"
                />
              ):(
                <RenderCards
                data={allPost}
                title="no post found"
                />
              )
              }
            </div>
          </>
        )
        }
    </div>
   </section>
  )
}

export default Community