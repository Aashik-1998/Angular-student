export interface Student {
    Name: string;
    RegestrationNo: string;
    Class: string;
    grade: string;
    Division: string;
    DueDate: string;
    Fee : string;
    Address: string;
    ContactNo: number;
    Rank:string;
  }
export interface Login{
  name: string;
  email: string;
  password: string;
  role: string; 
}
// export const STUDENTS: Student[] = [
//   {RegestrationNo: 1, Name: 'Akshay', Class: "5th", grade: 'A', Division: 'A', DueDate:'13/08/2020', fees: 'Rs 10000', Address: '123,TYU colony',ContactNo: 9876543210, Rank: '1st'},
//   {RegestrationNo: 2, Name: 'Aravind', Class: "6th", grade: 'B', Division: 'B', DueDate:'18/07/2020', fees: 'Rs 10000', Address: '456,REX colony',ContactNo: 9876543210, Rank: '2nd'},
//   {RegestrationNo: 3, Name: 'Veera', Class: "7th", grade: 'B', Division: 'C', DueDate:'30/07/2020', fees: 'Rs 10000', Address: '845,SDF colony',ContactNo: 9876543210, Rank: '3rd'},
//   {RegestrationNo: 4, Name: 'John', Class: "5th", grade: 'C', Division: 'A', DueDate:'8/07/2020', fees: 'Rs 10000', Address: '243,OIU colony',ContactNo: 9876543210, Rank: '4th'},
//   {RegestrationNo: 8, Name: 'Bravo', Class: "6th", grade: 'D', Division: 'C', DueDate:'7/07/2020', fees: 'Rs 10000', Address: '345,ZXC colony',ContactNo: 9876543210, Rank: '5th'},
//   {RegestrationNo: 7, Name: 'Test', Class: "7th", grade: 'A', Division: 'B', DueDate:'5/07/2020', fees: 'Rs 10000', Address: '346,GHJ colony',ContactNo: 9876543210, Rank: '6th'},
// ];