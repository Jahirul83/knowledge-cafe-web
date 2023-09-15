import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4  border-b-2 md:max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowlodge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;