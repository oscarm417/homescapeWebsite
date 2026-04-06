import { FaPhone, FaMapMarker, FaEnvelope } from 'react-icons/fa';
import grass from "../assets/grass.jpg";
import { useState } from 'react'; 

const Contact = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:'',
    });
    const [submitState, setSubmitState] = useState({
        status: 'idle',
        message: '',
    });
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });

        if (submitState.status !== 'idle') {
            setSubmitState({
                status: 'idle',
                message: '',
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitState({
            status: 'submitting',
            message: 'Sending your message...',
        });

        try {
            const formData = new FormData(e.target);
            formData.append("access_key","09f4b0ed-8b4b-48a8-b4f5-dbeef740db63");
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            const res = await fetch("https://api.web3forms.com/submit",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                },
                body:json
            });
            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Something went wrong while sending your message.");
            }

            setSubmitState({
                status: 'success',
                message: "Thanks. Your message was sent successfully. We'll get back to you soon.",
            });

            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setSubmitState({
                status: 'error',
                message: error.message || "We couldn't send your message right now. Please call or email instead.",
            });
        }
    };

    const isSubmitting = submitState.status === 'submitting';

    return (
      <div id = "contact" className='min-h-[600px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          {/* Image and Info */}
          <div
            className="bg-cover bg-center h-full sm:h-[600px] flex items-center justify-center"
            style={{ backgroundImage: `url(${grass})` }}
          >
            {/* Your content goes here */}
            <div className="text-white text-center bg-slate-800 opacity-90 rounded-md h-[90%] w-[80%] sm:h-[50%] sm:w-[70%] md:p-12 mb-4">
              <h1 className="text-xl lg:text-5xl font-bold">Contact Us</h1>
              <ul className='mt-8 '>
                <li className='m-4 text-left flex items-center  text-xs lg:text-lg'>
                  <FaMapMarker size={30} className="mr-2" />
                  5616 Hemmingway Dr, El Paso, TX 79924
                </li>
                <li className='m-4 text-left flex items-center  text-xs lg:text-lg'>
                  <FaPhone size={30} className="mr-2" />
                  (915) 433-7668 (text/call)
                </li>
                <li className='m-4 text-left flex items-center  text-xs lg:text-lg'>
                  <FaEnvelope size={30} className="mr-2" />
                  HomeScape915@gmail.com
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Form */}
          <div className="p-8">
            {/* Your contact form goes here */}
            <h2 className='text-xl sm:text-4xl font-bold text-center m-4'>Message Us</h2>
            <p className='text-lg font-semibold text-center'>Please let us know how we can help, and will provide you a quote as soon as possible</p>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div aria-live="polite" className="mb-4 min-h-[56px]">
                    {submitState.status !== 'idle' && (
                        <div
                            className={`rounded-md px-4 py-3 text-sm font-semibold ${
                                submitState.status === 'success'
                                    ? 'bg-green-100 text-green-800'
                                    : submitState.status === 'error'
                                        ? 'bg-red-100 text-red-800'
                                        : 'bg-slate-100 text-slate-700'
                            }`}
                        >
                            {submitState.message}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        disabled={isSubmitting}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        disabled={isSubmitting}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold mb-1">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        disabled={isSubmitting}
                        required
                    ></textarea>
                </div>
                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#22C55E] text-white px-4 py-2 rounded-md hover:bg-green-300 disabled:cursor-not-allowed disabled:bg-green-200"
                    >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  export default Contact;
