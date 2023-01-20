import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = () => {
  return (
    <ul className='app-list list-group'>
      <EmployeesListItem name='John C.' wage={800} />
      <EmployeesListItem name='Alex M.' wage={3000} />
      <EmployeesListItem name='Carl W.' wage={5000} />
    </ul>
  );
};

export default EmployeesList;
