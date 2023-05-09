import parse from 'html-react-parser';
import './Main.css';
import logo from '../../assets/images/logo.svg';
import location from '../../assets/images/locationIcon.svg'

const Main = (props) => {

    const { name, picture, type, description, user, company } = props.product;

    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div>
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div className='grid grid-cols-3 shadow-xl border-2 border-gray-100 rounded-xl '>
                    <div className=" col-span-2 main_section bg-white py-10 px-20">
                        <img src={picture} alt="" />
                        <h4 className='text-lg font-medium mt-20' >{name}</h4>
                        <p className='text-gray-600 my-5'>Type: {type.name}</p>
                        <p>{parse(description)}</p>
                    </div>
                    <div className='border-s-2 border-gray-300 p-5 bg-white  bg-white'>
                        <p className='font-medium text-gray-600'>Offered By</p>
                        <img className='w-40 my-3' src={logo} alt="" />
                        <div className='flex my-5'>
                            <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.profilePicture} alt="{user.handle}" />
                            <div className='ms-3 text-gray-600'>
                                <p className='font-medium'>{`${user.firstName} ${user.lastName}`}</p>
                                <p>{`${company.name}`}</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <img className='w-3 mr-3 mt-1' src={location} alt="" />
                            <p className='text-gray-500'> {company.address.street} <br /> {`${company.address.zipCode} ${company.address.city.name} ${company.address.country.name}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;