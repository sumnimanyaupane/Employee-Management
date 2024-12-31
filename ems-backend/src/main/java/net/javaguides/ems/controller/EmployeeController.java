package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@AllArgsConstructor
//@Autowired
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //build add employee rest api
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
      EmployeeDto savedEmployee =  employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee , HttpStatus.CREATED);
    }

    //build get employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);


    }

    //build getAll employees REST Api
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
      List<EmployeeDto> employees =  employeeService.getAllEmployees();
      return ResponseEntity.ok(employees);
    }


//build update employees REST Api
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee( @PathVariable("id") long employeeId,@RequestBody EmployeeDto updatedEmployee) {
        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
        return ResponseEntity.ok(employeeDto);

    }
   //build delete employees REST Api
@DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully");
    }



    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

}
