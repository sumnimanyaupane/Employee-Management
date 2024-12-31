package net.javaguides.ems.controller;


import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private  DepartmentService departmentService;

    // build create or add department rest api

   @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto){
    DepartmentDto department = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(department, HttpStatus.CREATED);
    }

    // build get department rest api
@GetMapping("{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long DepartmentId){
    DepartmentDto departmentDto=   departmentService.getDepartmentById(DepartmentId);
    return ResponseEntity.ok(departmentDto);
    }


    // build get all department rest api
    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments(){
    List<DepartmentDto> departments = departmentService.getAllDepartments();
    return ResponseEntity.ok(departments);
    }

    // build update department rest api
    @PutMapping("{id}")
    public ResponseEntity<DepartmentDto> updateDepartment(@PathVariable("id") Long departmentId, @RequestBody DepartmentDto departmentDto){
       DepartmentDto department = departmentService.updateDepartment(departmentId, departmentDto);
       return ResponseEntity.ok(departmentDto);
    }

    // build delete department rest api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable("id") Long departmentId){
       departmentService.deleteDepartment(departmentId);
       return ResponseEntity.ok("Department deleted successfully");
    }

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

}
