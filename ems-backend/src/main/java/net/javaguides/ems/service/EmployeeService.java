package net.javaguides.ems.service;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.repository.EmployeeRepository;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);


    EmployeeDto getEmployeeById(Long id);


    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId , EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);
}
