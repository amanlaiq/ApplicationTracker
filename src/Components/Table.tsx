import { MdDeleteOutline } from 'react-icons/Md';
import { BiEdit } from 'react-icons/Bi';
import {  useRef } from 'react';
import { status } from '../App';
import { BsDownload } from 'react-icons/Bs';
import LabelStatus from './LabelStatus';

export interface application{
    applicationNo: number;
    company: string;
    dateApplied: string;
    link: string;
    status: string;
    
}

interface Props{
    applications: application[];
    handleDelete: (id: number)=>void;
    handleEdit: (id:number)=>void;
    showOption: number;
    handleSubmit: (app:application,earlierStatus: string)=>void;
    download: ()=>void;
    onButtonClick:(header: string)=>void;
}



export default Table