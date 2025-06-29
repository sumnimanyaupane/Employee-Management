import axios from 'axios'

const TEACHER_REST_API_BASE_URL='http://localhost:8080/api/teachers'
export const getAllTeachers=()=>{
    return axios.get(TEACHER_REST_API_BASE_URL);

}

export const createTeacher=(teacher)=>{
    return axios.post(TEACHER_REST_API_BASE_URL,teacher);

}

export const getTeacherById=(teacherId)=>{
    return axios.get(TEACHER_REST_API_BASE_URL+ '/'+teacherId);

}


export const updateTeacher=(teacherId,teacher)=>{
    return axios.put(TEACHER_REST_API_BASE_URL+ '/' + teacherId,teacher);

}

export const deleteTeacher=(teacherId)=>{
    return axios.delete(TEACHER_REST_API_BASE_URL+ '/' + teacherId);

}