package net.javaguides.ems.dto;

public class DepartmentDto {
    private Long id;
    private String departmentName;
    private String departmentDescription;

    //getter and setter


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public String getDepartmentDescription() {
        return departmentDescription;
    }

    public void setDepartmentDescription(String departmentDescription) {
        this.departmentDescription = departmentDescription;
    }

    public DepartmentDto(Long id, String departmentDescription, String departmentName) {
        this.id = id;
        this.departmentDescription = departmentDescription;
        this.departmentName = departmentName;
    }
    public DepartmentDto() {

    }
}
