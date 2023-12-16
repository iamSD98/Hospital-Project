import React from 'react'
import { useParams} from 'react-router-dom'
import {useEffect,useState } from 'react'
import axios from 'axios';

const DoctorDetails = () => {



    let {did,id}=useParams();
    // console.log("get doc id",did);

    let depart_url = " http://localhost:4000/doctors";
    let [fetchDoc, setDoc] = useState( {
        doctorname: "",
        qualification: "",
        experiance: "",
        proimg: "",
        docid: ""
      });
  
    useEffect(() => {
      axios
        .get(`${depart_url}/${id}`)
        .then((res) => {
        //   console.log("The fetch docdor ", res.data);
          let doc=res.data.consultant.find(data=>data.docid==did)
          console.log("doctor",doc);
          setDoc({...fetchDoc,...doc})
        })
        .catch((err) => {
          console.log("Doctor dont fetch", err);
        });
    }, []);


  return (
    <div>
        <h1>DoctorDetails page</h1>
        <h2>Doctor name:{fetchDoc.doctorname}</h2>
        <h3>Doctor Qualification:{fetchDoc.qualification}</h3>
        <h3>Doctor Experiance:{fetchDoc.experiance}</h3>

    </div>
  )
}

export default DoctorDetails