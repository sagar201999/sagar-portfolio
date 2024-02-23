import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'

const Blogs = () => {



    return (
        <>
            <div id='blogs'>
                <h3 className='text-center pt-3'>Fetaure Posts</h3>
                <div className='blogs-container'>
                    <div className='blog-box'>
                        <img src='../../Images/blog-1.png' alt='blog img' />
                        <p className='mt-2'>post on <span className='Tiffany-Blue'>11.12.2023</span> by <span className='Tiffany-Blue'>sagar</span></p>
                        <h6>What are Node.js ":node" protocol imports?</h6>
                        <p>Gone are the days of the older require/module.exports/CommonJS import syntaxes.
                             In recent versions of Node.js....</p>
                    </div>
                    <div className='blog-box'>
                        <img src='../../Images/blog-1.png' alt='blog img' />
                        <p className='mt-2'>post on <span className='Tiffany-Blue'>11.12.2023</span> by <span className='Tiffany-Blue'>sagar</span></p>
                        <h6>What are Node.js ":node" protocol imports?</h6>
                        <p>Gone are the days of the older require/module.exports/CommonJS import syntaxes.
                             In recent versions of Node.js....</p>
                    </div>
                    <div className='blog-box'>
                        <img src='../../Images/blog-1.png' alt='blog img' />
                        <p className='mt-2'>post on <span className='Tiffany-Blue'>11.12.2023</span> by <span className='Tiffany-Blue'>sagar</span></p>
                        <h6>What are Node.js ":node" protocol imports?</h6>
                        <p>Gone are the days of the older require/module.exports/CommonJS import syntaxes.
                             In recent versions of Node.js....</p>
                    </div>
                </div>
                <div className='text-center py-5'>
                    <button> Show More</button>
                </div>

            </div>

        </>
    )
}

export default Blogs;