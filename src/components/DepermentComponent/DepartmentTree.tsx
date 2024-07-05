// src/DepartmentTree.tsx
import React, { useEffect, useState } from 'react';
import { Department } from './../../DataModel/Department'
import './DepartmentTree.css'; 


const DepartmentTree: React.FC = () => {
    const [expanded, setExpanded] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);

    const handleToggle = (department: string) => {
        setExpanded(prev =>
            prev.includes(department) ? prev.filter(dep => dep !== department) : [...prev, department]
        );
    };

    const handleSelect = (id: string, isSubDepartment = false) => {
        let newSelected = [...selected];

        if (newSelected.includes(id)) {
            newSelected = newSelected.filter(sel => sel !== id);

            if (!isSubDepartment) {
                const department = departments.find(dep => dep.department === id);
                if (department) {
                    newSelected = newSelected.filter(sel => !department.sub_departments.includes(sel));
                }
            } else {
                const parentDepartment = departments.find(dep => dep.sub_departments.includes(id));
                if (parentDepartment) {
                    newSelected = newSelected.filter(sel => sel !== parentDepartment.department);
                }
            }
        } else {
            newSelected.push(id);

            if (!isSubDepartment) {
                const department = departments.find(dep => dep.department === id);
                if (department) {
                    newSelected = [...newSelected, ...department.sub_departments];
                }
            } else {
                const parentDepartment = departments.find(dep => dep.sub_departments.includes(id));
                if (parentDepartment && parentDepartment.sub_departments.every(sub => newSelected.includes(sub))) {
                    newSelected.push(parentDepartment.department);
                }
            }
        }

        setSelected(newSelected);
    };
    const [departments, setDepartments] = useState<Department[]>([]);
    useEffect(() => {
        fetch('menu.json')
            .then(response => response.json())
            .then(data => setDepartments(data));
    }, []);


    return (
        <div className="department-tree">
            {departments.map(department => (
                <div key={department.department}>
                    <div className="department-item">
                        <span className='btn' onClick={() => handleToggle(department.department)}>
                            {expanded.includes(department.department) ? '➖' : '➕'}
                        </span>
                        <input
                            type="checkbox"
                            checked={selected.includes(department.department)}
                            onChange={() => handleSelect(department.department)}
                        />
                        <span>{department.department}</span>
                    </div>
                    {expanded.includes(department.department) && (
                        <div className="sub-departments">
                            {department.sub_departments.map(sub => (
                                <div key={sub} className="sub-department-item">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(sub)}
                                        onChange={() => handleSelect(sub, true)}
                                    />
                                    <span>{sub}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DepartmentTree;
