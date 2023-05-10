import parse from 'html-react-parser';
import './Main.css';
import logo from '../../assets/images/logo.svg';
import location from '../../assets/images/locationIcon.svg'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'


const Main = (props) => {

    const { name, picture, type, description, user, company } = props.main;

    return (
        <div className="relative isolate overflow-hidden shadow-xl mt-32 lg:overflow-visible lg:px-0">
            <div className='grid grid-cols-3 border-2 border-gray-100 rounded-xl'>
                <div className=" col-span-2 main_section py-10 px-20">
                    <img src={picture} alt="" />
                    <h4 className='text-lg font-medium mt-20' >{name}</h4>
                    <p className='text-gray-600 my-5'>Type: {type.name}</p>
                    <p>{parse(description)}</p>
                </div>
                <div className='border-s-2 border-gray-300 p-5'>
                    <p className='font-medium text-gray-600'>Offered By</p>
                    <img className='w-40 my-3' src={logo} alt="" />
                    <div className='flex my-5'>
                        <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.profilePicture} alt="{user.handle}" />
                        <div className='ms-3 text-gray-600'>
                            <p className='font-medium'>{`${user.firstName} ${user.lastName}`}</p>
                            <p>{`${company.name}`}</p>
                        </div>
                    </div>
                    <div className='flex items-start mb-4'>
                        <img className='w-3 mr-3 mt-1' src={location} alt="" />
                        <p className='text-gray-500'> {company.address.street} <br /> {`${company.address.zipCode} ${company.address.city.name} ${company.address.country.name}`}</p>
                    </div>
                    <MapContainer className='map_container' id="map" center={[company.address.latitude, company.address.longitude]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[company.address.latitude, company.address.longitude]}></Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Main;