import './Sidebar.css';
import materials from '../../data/materials.json';
import Topics from '../../components/Topics';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <ul>
                <Topics data={materials}/>
            </ul>
        </div>
    )
}
export default Sidebar;