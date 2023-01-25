import { MdAssignmentTurnedIn } from 'react-icons/md';
import todoListImg from '../assets/img/img.png';
const Header = () => {
    return (
        <>
            <div className="text-3xl">
                <div className="flex items-center justify-center">
                    <MdAssignmentTurnedIn />
                    <h1 className=" font-bold">ONLINE TODO LIST</h1>
                </div>
                <img src={todoListImg} alt="img" />
            </div>
        </>
    );
};
export default Header;
