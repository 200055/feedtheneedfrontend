import { useState,useEffect } from "react"
import axios from "axios";
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'react-router-dom'
import "./Maps.scss"

const UpdateBlog = () => {
    const {blog_id } = useParams();

    const [blog_name, setblog_name] = useState('');

    const [short_desc, setshort_desc] = useState('');
    const [blog_desc, setblog_desc] = useState('');
    const [blog_category, setblog_category] = useState('');
    const [blog_image, setblog_image] = useState('');
    
    const [message, setMessage] = useState('');

	useEffect(() => {
        axios.get('http://localhost:90/blog/'+blog_id)
            .then(response => {
                setblog_name(response.data.data.blog_name)
                setshort_desc(response.data.data.short_desc)
                setblog_desc(response.data.data.blog_desc)
                setblog_category(response.data.data.blog_category)
                setblog_image(response.data.data.blog_image)
                // console.log(response.data.data.blog_name)
                console.log(blog_name)
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    const Update = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('blog_name',blog_name);
        data.append('short_desc',short_desc);
        data.append('blog_desc',blog_desc);
        data.append('blog_category',blog_category);
        data.append('blog_image',blog_image);
        const config = {
            headers:{
                Authorization : "Bearer " + localStorage.getItem('adminticket'),
            }
        }
        
        axios.put("http://localhost:90/blog/update/"+ blog_id, data,config)
            .then((response => {
                if(response.data.msg !=="Invalid Token"){
					
                    setMessage(" Blog updated Sucessfully")
					toast.success("Blog updated Sucessfully",{
						position:"bottom-right"
					})
                    window.location.replace('/dashboard/blog');

                }else{
                    setMessage("Failed To Update Product")
					toast.failed("Failed To Update Product",{
						position:"bottom-right"
					})
                }
                console.log(response.data.msg);
            }))
            .catch()
    }
    return (
        <>
		<div>
		<DashboardStatsGrid />
		</div>
        <form
  className="forbox w-full max-w-2xl h-fit max-h-lg m-auto py-10 mt-10 px-10 border rounded-lg flex flex-col gap-4"
  onSubmit={Update}
>
	
	<div className="text-gray-600 font-medium text-3xl">Edit Blog</div>
	<div>
		<label className="text-gray-600 font-medium">Blog Title</label>
		<input 
        value={blog_name}
		onChange={(e) => {setblog_name(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="title" placeholder="Insert Title"  required />
	</div>

	<div>
		<label className="text-gray-600 font-medium">Blog Short Description</label>
		<input 
        value={short_desc}
		onChange={(e) => {setshort_desc(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="title" placeholder="Insert Short Description"  required />
	</div>
	
	
	<div>
		<label className="text-gray-600 font-medium">Blog Description</label>
		<textarea 
        value={blog_desc}
		onChange={(e) => {setblog_desc(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="title" placeholder="Insert Description." required resize/>
	</div>

	<div>
		<label className="text-gray-600 font-medium">Blog Category</label>
		<input 
        value={blog_category}
		onChange={(e) => {setblog_category(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="title" placeholder="Insert Category" required/>
	</div>

  
  
	<label class="text-gray-600 font-medium" for="file_input">Upload file</label>
	<input 
    // value={blog_image}
	onChange={(e) => {setblog_image(e.target.files[0])}}
	class="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
    id="file_input" type="file"/>
	
  <button
    className="mt-4 w-full bg-blue-400 hover:bg-blue-600 text-blue-100 border shadow py-3 px-6 font-semibold text-md rounded"
    type="submit"
  >
    Submit
  </button>
  <ToastContainer />
</form>
  
    

        </>
    )
}
export default UpdateBlog;