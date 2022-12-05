import { useState } from "react";
import axios from "axios";
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./Maps.scss"

const CreateBlog = () => {
    const [blog_name, setblog_name] = useState('');

    const [short_desc, setshort_desc] = useState('');
    const [blog_desc, setblog_desc] = useState('');
    const [blog_category, setblog_category] = useState('');
    const [blog_image, setblog_image] = useState('');
    
    const [message, setMessage] = useState('');

	

    const AddBlog = (e) => {
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
        
        axios.post("http://localhost:90/blog/insert", data,config)
            .then((response => {
                if(response.data.msg !=="Invalid Token"){
					
                    setMessage(" Blog added Sucessfully")
					toast.success("Blog added Sucessfully",{
						position:"bottom-right"
					})
                    
                    window.location.replace('/dashboard/blog');
                }else{
                    setMessage("Failed To Add Product")
					toast.failed("Failed To Add Product",{
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
  onSubmit={AddBlog}
>
	
	<div className="text-gray-600 font-medium text-3xl">Add Blog</div>
	<div>
		<label className="text-gray-600 font-medium">Blog Title</label>
		<input 
        id="blogTitle"
		onChange={(e) => {setblog_name(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
        name="title" placeholder="Insert Title" autoFocus required />
	</div>

	<div>
		<label className="text-gray-600 font-medium">Blog Short Description</label>
		<input 
        id="shortDesc"
		onChange={(e) => {setshort_desc(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
        name="title" placeholder="Insert Short Description" autoFocus required />
	</div>
	
	
	<div>
		<label className="text-gray-600 font-medium">Blog Description</label>
		<textarea 
        id="blogDesc"
		onChange={(e) => {setblog_desc(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
        name="title" placeholder="Insert Description." autoFocus required resize/>
	</div>

	<div>
		<label className="text-gray-600 font-medium">Blog Category</label>
		<input 
        id="blogCategory"
		onChange={(e) => {setblog_category(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
        name="title" placeholder="Insert Category" required/>
	</div>

  
  
	<label class="text-gray-600 font-medium" for="file_input">Upload file</label>
	<input 
	onChange={(e) => {setblog_image(e.target.files[0])}}
	class="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
    id="file_input" type="file" required/>
	
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
export default CreateBlog;